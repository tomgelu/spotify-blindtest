import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import {
  Navbar,
  Alignment,
  Button,
  Spinner,
  Colors,
  Intent,
  TextArea,
  Drawer,
  Position,
  DrawerSize,
  Card,
  Divider,
} from "@blueprintjs/core";
import { Component } from "react";
import spotify from "spotify-web-api-js";
import { lerp } from "./utils";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

class App extends Component<
  {},
  {
    authenticated: boolean;
    running: boolean;
    showSearchResults: boolean;
    timer: number;
    searchedPlaylists: SpotifyApi.PlaylistObjectSimplified[];
    selectedPlaylist: SpotifyApi.PlaylistObjectSimplified | null;
    currentTrack: SpotifyApi.TrackObjectFull | null;
  }
> {
  spotifyApi: spotify.SpotifyWebApiJs;
  searchValue: string = "";
  constructor(props: {}) {
    super(props);
    this.state = {
      authenticated: false,
      running: false,
      showSearchResults: false,
      timer: 0,
      searchedPlaylists: [],
      selectedPlaylist: null,
      currentTrack: null,
    };
    this.spotifyApi = new spotify();
    this.spotifyApi.getAccessToken = () => {
      const match = window.location.hash.match(/#access_token=([^&]*)/);
      if (match) {
        return match[1];
      }
      return "";
    };

    const token = this.spotifyApi.getAccessToken();
    if (token) {
      this.state = {
        ...this.state,
        authenticated: true,
      };
      this.spotifyApi.setAccessToken(token);
    }
  }

  login(): void {
    const clientId = "dc1a3182526e4fddbc292110667c14f3";
    const redirectUri = import.meta.env.VITE_CALLBACK_URL;
    const scopes = ["user-read-private", "user-read-email"];

    window.location.href = `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
      "%20"
    )}&response_type=token&show_dialog=true`;
  }

  searchPlaylists = async (prompt: string) => {
    const data = await this.spotifyApi.searchPlaylists(prompt, {
      limit: 10,
    });
    const playlists = data.playlists.items;
    this.setState({
      searchedPlaylists: playlists,
    });
    this.setState({
      showSearchResults: true,
    });
  };

  start = async (playlist: SpotifyApi.PlaylistObjectSimplified) => {
    this.setState({
      running: true,
    });

    const tracks = await this.spotifyApi.getPlaylistTracks(playlist.id);
    const shuffledTracks = this.shuffle<SpotifyApi.PlaylistTrackObject>(
      tracks.items
    );

    let currentTrack = 0;
    let audioElement: HTMLAudioElement | null = null;

    const playNextTrack = () => {
      if (currentTrack < shuffledTracks.length) {
        const track = shuffledTracks[currentTrack];
        this.setState({
          currentTrack: track.track as SpotifyApi.TrackObjectFull,
        });
        audioElement = new Audio(
          (track.track as SpotifyApi.TrackObjectFull).preview_url
        );
        audioElement.currentTime = 0;
        audioElement.play();
        audioElement.ontimeupdate = async () => {
          if (audioElement!.currentTime >= 20) {
            audioElement!.ontimeupdate = null;
            audioElement!.pause();
            currentTrack++;
            playNextTrack();
          }
          if (audioElement!.currentTime >= 15) {
            const volume = lerp(audioElement!.currentTime, 15, 20);
            audioElement!.volume = volume;
          }
          this.setState({
            timer: audioElement!.currentTime,
          });
        };
      }
    };

    playNextTrack();
  };

  shuffle<T>(array: T[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  selectPlaylist = (playlist: SpotifyApi.PlaylistObjectSimplified) => {
    this.setState({
      selectedPlaylist: playlist,
      showSearchResults: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Navbar id="navbar">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>SPOTIFY BLIND TEST</Navbar.Heading>
            <Navbar.Divider />
            <div className="bp4-input-group">
              <span className="bp4-icon bp4-icon-search"></span>
              <input
                type="text"
                className="bp4-input"
                placeholder="Search"
                onChange={(v) => (this.searchValue = v.target.value)}
              />
              <button
                className="bp4-button bp4-minimal bp4-intent-primary bp4-icon-arrow-right"
                onClick={(async () =>
                  await this.searchPlaylists(this.searchValue)).bind(this)}
              ></button>
            </div>
          </Navbar.Group>
        </Navbar>
        <div id="main">
          {this.state.showSearchResults && (
            <Card id="searchCard">
              {this.state.searchedPlaylists.map((playlist) => {
                return (
                  <div
                    className="playlist"
                    key={playlist.name}
                    onClick={(() => this.selectPlaylist(playlist)).bind(this)}
                  >
                    <img
                      className="playlist-img"
                      src={playlist.images[0].url}
                    />
                    <h3 className="playlist-name">{playlist.name}</h3>
                    <Divider></Divider>
                  </div>
                );
              })}
            </Card>
          )}
          {!this.state.showSearchResults && !this.state.authenticated && (
            <Button id="button" onClick={this.login.bind(this)}>
              Login
            </Button>
          )}
          {!this.state.showSearchResults &&
            this.state.selectedPlaylist !== null &&
            this.state.authenticated &&
            !this.state.running && (
              <Button
                id="button"
                onClick={(async () =>
                  await this.start(this.state.selectedPlaylist!)).bind(this)}
              >
                Start
              </Button>
            )}
          {this.state.currentTrack &&
            !this.state.showSearchResults &&
            this.state.running && (
              <div>
                <Spinner
                  size={50}
                  value={this.state.timer / 20}
                  intent={Intent.SUCCESS}
                ></Spinner>
                {this.state.timer >= 15 && (
                  <div className="playlist">
                    <img
                      className="playlist-img"
                      src={this.state.currentTrack.album.images[0].url}
                    />
                    <h3 className="playlist-name">
                      {this.state.currentTrack.name}
                    </h3>
                    <Divider></Divider>
                  </div>
                )}
              </div>
            )}
        </div>
      </div>
    );
  }
}

export default App;
