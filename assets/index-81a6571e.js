(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const i of p)if(i.type==="childList")for(const v of i.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&d(v)}).observe(document,{childList:!0,subtree:!0});function s(p){const i={};return p.integrity&&(i.integrity=p.integrity),p.referrerpolicy&&(i.referrerPolicy=p.referrerpolicy),p.crossorigin==="use-credentials"?i.credentials="include":p.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function d(p){if(p.ep)return;p.ep=!0;const i=s(p);fetch(p.href,i)}})();var q={},S={get exports(){return q},set exports(l){q=l}};(function(l){var c=function(){var s="https://api.spotify.com/v1",d=null,p=null,i=function(t,e){return t.abort=e,t},v=function(t,e){var r;if(p!==null){var a=p.defer();t(function(u){a.resolve(u)},function(u){a.reject(u)}),r=a.promise}else window.Promise&&(r=new window.Promise(t));return r?new i(r,e):null},T=function(){var t=Array.prototype.slice.call(arguments),e=t[0],r=t.slice(1);return e=e||{},r.forEach(function(a){for(var u in a)a.hasOwnProperty(u)&&(e[u]=a[u])}),e},g=function(t,e){var r="";for(var a in e)if(e.hasOwnProperty(a)){var u=e[a];r+=encodeURIComponent(a)+"="+encodeURIComponent(u)+"&"}return r.length>0&&(r=r.substring(0,r.length-1),t=t+"?"+r),t},_=function(t,e){var r=new XMLHttpRequest,a=function(u,y){function f(D){u&&u(D),e&&e(null,D)}function b(){y&&y(r),e&&e(r,null)}var P=t.type||"GET";if(r.open(P,g(t.url,t.params)),d&&r.setRequestHeader("Authorization","Bearer "+d),r.onreadystatechange=function(){if(r.readyState===4){var D=null;try{D=r.responseText?JSON.parse(r.responseText):""}catch(A){console.error(A)}r.status>=200&&r.status<300?f(D):b()}},P==="GET")r.send(null);else{var h=null;t.postData&&(t.contentType==="image/jpeg"?(h=t.postData,r.setRequestHeader("Content-Type",t.contentType)):(h=JSON.stringify(t.postData),r.setRequestHeader("Content-Type","application/json"))),r.send(h)}};return e?(a(),null):v(a,function(){r.abort()})},n=function(t,e,r,a){var u={},y=null;typeof e=="object"?(u=e,y=r):typeof e=="function"&&(y=e);var f=t.type||"GET";return f!=="GET"&&t.postData&&!a?t.postData=T(t.postData,u):t.params=T(t.params,u),_(t,y)},o=function(){};return o.prototype={constructor:c},o.prototype.getGeneric=function(t,e){var r={url:t};return n(r,e)},o.prototype.getMe=function(t,e){var r={url:s+"/me"};return n(r,t,e)},o.prototype.getMySavedTracks=function(t,e){var r={url:s+"/me/tracks"};return n(r,t,e)},o.prototype.addToMySavedTracks=function(t,e,r){var a={url:s+"/me/tracks",type:"PUT",postData:t};return n(a,e,r)},o.prototype.removeFromMySavedTracks=function(t,e,r){var a={url:s+"/me/tracks",type:"DELETE",postData:t};return n(a,e,r)},o.prototype.containsMySavedTracks=function(t,e,r){var a={url:s+"/me/tracks/contains",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getMySavedAlbums=function(t,e){var r={url:s+"/me/albums"};return n(r,t,e)},o.prototype.addToMySavedAlbums=function(t,e,r){var a={url:s+"/me/albums",type:"PUT",postData:t};return n(a,e,r)},o.prototype.removeFromMySavedAlbums=function(t,e,r){var a={url:s+"/me/albums",type:"DELETE",postData:t};return n(a,e,r)},o.prototype.containsMySavedAlbums=function(t,e,r){var a={url:s+"/me/albums/contains",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getMyTopArtists=function(t,e){var r={url:s+"/me/top/artists"};return n(r,t,e)},o.prototype.getMyTopTracks=function(t,e){var r={url:s+"/me/top/tracks"};return n(r,t,e)},o.prototype.getMyRecentlyPlayedTracks=function(t,e){var r={url:s+"/me/player/recently-played"};return n(r,t,e)},o.prototype.followUsers=function(t,e){var r={url:s+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"user"}};return n(r,e)},o.prototype.followArtists=function(t,e){var r={url:s+"/me/following/",type:"PUT",params:{ids:t.join(","),type:"artist"}};return n(r,e)},o.prototype.followPlaylist=function(t,e,r){var a={url:s+"/playlists/"+t+"/followers",type:"PUT",postData:{}};return n(a,e,r)},o.prototype.unfollowUsers=function(t,e){var r={url:s+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"user"}};return n(r,e)},o.prototype.unfollowArtists=function(t,e){var r={url:s+"/me/following/",type:"DELETE",params:{ids:t.join(","),type:"artist"}};return n(r,e)},o.prototype.unfollowPlaylist=function(t,e){var r={url:s+"/playlists/"+t+"/followers",type:"DELETE"};return n(r,e)},o.prototype.isFollowingUsers=function(t,e){var r={url:s+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"user"}};return n(r,e)},o.prototype.isFollowingArtists=function(t,e){var r={url:s+"/me/following/contains",type:"GET",params:{ids:t.join(","),type:"artist"}};return n(r,e)},o.prototype.areFollowingPlaylist=function(t,e,r){var a={url:s+"/playlists/"+t+"/followers/contains",type:"GET",params:{ids:e.join(",")}};return n(a,r)},o.prototype.getFollowedArtists=function(t,e){var r={url:s+"/me/following",type:"GET",params:{type:"artist"}};return n(r,t,e)},o.prototype.getUser=function(t,e,r){var a={url:s+"/users/"+encodeURIComponent(t)};return n(a,e,r)},o.prototype.getUserPlaylists=function(t,e,r){var a;return typeof t=="string"?a={url:s+"/users/"+encodeURIComponent(t)+"/playlists"}:(a={url:s+"/me/playlists"},r=e,e=t),n(a,e,r)},o.prototype.getPlaylist=function(t,e,r){var a={url:s+"/playlists/"+t};return n(a,e,r)},o.prototype.getPlaylistTracks=function(t,e,r){var a={url:s+"/playlists/"+t+"/tracks"};return n(a,e,r)},o.prototype.getPlaylistCoverImage=function(t,e){var r={url:s+"/playlists/"+t+"/images"};return n(r,e)},o.prototype.createPlaylist=function(t,e,r){var a={url:s+"/users/"+encodeURIComponent(t)+"/playlists",type:"POST",postData:e};return n(a,e,r)},o.prototype.changePlaylistDetails=function(t,e,r){var a={url:s+"/playlists/"+t,type:"PUT",postData:e};return n(a,e,r)},o.prototype.addTracksToPlaylist=function(t,e,r,a){var u={url:s+"/playlists/"+t+"/tracks",type:"POST",postData:{uris:e}};return n(u,r,a,!0)},o.prototype.replaceTracksInPlaylist=function(t,e,r){var a={url:s+"/playlists/"+t+"/tracks",type:"PUT",postData:{uris:e}};return n(a,{},r)},o.prototype.reorderTracksInPlaylist=function(t,e,r,a,u){var y={url:s+"/playlists/"+t+"/tracks",type:"PUT",postData:{range_start:e,insert_before:r}};return n(y,a,u)},o.prototype.removeTracksFromPlaylist=function(t,e,r){var a=e.map(function(y){return typeof y=="string"?{uri:y}:y}),u={url:s+"/playlists/"+t+"/tracks",type:"DELETE",postData:{tracks:a}};return n(u,{},r)},o.prototype.removeTracksFromPlaylistWithSnapshotId=function(t,e,r,a){var u=e.map(function(f){return typeof f=="string"?{uri:f}:f}),y={url:s+"/playlists/"+t+"/tracks",type:"DELETE",postData:{tracks:u,snapshot_id:r}};return n(y,{},a)},o.prototype.removeTracksFromPlaylistInPositions=function(t,e,r,a){var u={url:s+"/playlists/"+t+"/tracks",type:"DELETE",postData:{positions:e,snapshot_id:r}};return n(u,{},a)},o.prototype.uploadCustomPlaylistCoverImage=function(t,e,r){var a={url:s+"/playlists/"+t+"/images",type:"PUT",postData:e.replace(/^data:image\/jpeg;base64,/,""),contentType:"image/jpeg"};return n(a,{},r)},o.prototype.getAlbum=function(t,e,r){var a={url:s+"/albums/"+t};return n(a,e,r)},o.prototype.getAlbumTracks=function(t,e,r){var a={url:s+"/albums/"+t+"/tracks"};return n(a,e,r)},o.prototype.getAlbums=function(t,e,r){var a={url:s+"/albums/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getTrack=function(t,e,r){var a={};return a.url=s+"/tracks/"+t,n(a,e,r)},o.prototype.getTracks=function(t,e,r){var a={url:s+"/tracks/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getArtist=function(t,e,r){var a={url:s+"/artists/"+t};return n(a,e,r)},o.prototype.getArtists=function(t,e,r){var a={url:s+"/artists/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getArtistAlbums=function(t,e,r){var a={url:s+"/artists/"+t+"/albums"};return n(a,e,r)},o.prototype.getArtistTopTracks=function(t,e,r,a){var u={url:s+"/artists/"+t+"/top-tracks",params:{country:e}};return n(u,r,a)},o.prototype.getArtistRelatedArtists=function(t,e,r){var a={url:s+"/artists/"+t+"/related-artists"};return n(a,e,r)},o.prototype.getFeaturedPlaylists=function(t,e){var r={url:s+"/browse/featured-playlists"};return n(r,t,e)},o.prototype.getNewReleases=function(t,e){var r={url:s+"/browse/new-releases"};return n(r,t,e)},o.prototype.getCategories=function(t,e){var r={url:s+"/browse/categories"};return n(r,t,e)},o.prototype.getCategory=function(t,e,r){var a={url:s+"/browse/categories/"+t};return n(a,e,r)},o.prototype.getCategoryPlaylists=function(t,e,r){var a={url:s+"/browse/categories/"+t+"/playlists"};return n(a,e,r)},o.prototype.search=function(t,e,r,a){var u={url:s+"/search/",params:{q:t,type:e.join(",")}};return n(u,r,a)},o.prototype.searchAlbums=function(t,e,r){return this.search(t,["album"],e,r)},o.prototype.searchArtists=function(t,e,r){return this.search(t,["artist"],e,r)},o.prototype.searchTracks=function(t,e,r){return this.search(t,["track"],e,r)},o.prototype.searchPlaylists=function(t,e,r){return this.search(t,["playlist"],e,r)},o.prototype.searchShows=function(t,e,r){return this.search(t,["show"],e,r)},o.prototype.searchEpisodes=function(t,e,r){return this.search(t,["episode"],e,r)},o.prototype.getAudioFeaturesForTrack=function(t,e){var r={};return r.url=s+"/audio-features/"+t,n(r,{},e)},o.prototype.getAudioFeaturesForTracks=function(t,e){var r={url:s+"/audio-features",params:{ids:t}};return n(r,{},e)},o.prototype.getAudioAnalysisForTrack=function(t,e){var r={};return r.url=s+"/audio-analysis/"+t,n(r,{},e)},o.prototype.getRecommendations=function(t,e){var r={url:s+"/recommendations"};return n(r,t,e)},o.prototype.getAvailableGenreSeeds=function(t){var e={url:s+"/recommendations/available-genre-seeds"};return n(e,{},t)},o.prototype.getMyDevices=function(t){var e={url:s+"/me/player/devices"};return n(e,{},t)},o.prototype.getMyCurrentPlaybackState=function(t,e){var r={url:s+"/me/player"};return n(r,t,e)},o.prototype.getMyCurrentPlayingTrack=function(t,e){var r={url:s+"/me/player/currently-playing"};return n(r,t,e)},o.prototype.transferMyPlayback=function(t,e,r){var a=e||{};a.device_ids=t;var u={type:"PUT",url:s+"/me/player",postData:a};return n(u,e,r)},o.prototype.play=function(t,e){t=t||{};var r="device_id"in t?{device_id:t.device_id}:null,a={};["context_uri","uris","offset","position_ms"].forEach(function(f){f in t&&(a[f]=t[f])});var u={type:"PUT",url:s+"/me/player/play",params:r,postData:a},y=typeof t=="function"?t:{};return n(u,y,e)},o.prototype.queue=function(t,e,r){e=e||{};var a="device_id"in e?{uri:t,device_id:e.device_id}:{uri:t},u={type:"POST",url:s+"/me/player/queue",params:a};return n(u,e,r)},o.prototype.pause=function(t,e){t=t||{};var r="device_id"in t?{device_id:t.device_id}:null,a={type:"PUT",url:s+"/me/player/pause",params:r};return n(a,t,e)},o.prototype.skipToNext=function(t,e){t=t||{};var r="device_id"in t?{device_id:t.device_id}:null,a={type:"POST",url:s+"/me/player/next",params:r};return n(a,t,e)},o.prototype.skipToPrevious=function(t,e){t=t||{};var r="device_id"in t?{device_id:t.device_id}:null,a={type:"POST",url:s+"/me/player/previous",params:r};return n(a,t,e)},o.prototype.seek=function(t,e,r){e=e||{};var a={position_ms:t};"device_id"in e&&(a.device_id=e.device_id);var u={type:"PUT",url:s+"/me/player/seek",params:a};return n(u,e,r)},o.prototype.setRepeat=function(t,e,r){e=e||{};var a={state:t};"device_id"in e&&(a.device_id=e.device_id);var u={type:"PUT",url:s+"/me/player/repeat",params:a};return n(u,e,r)},o.prototype.setVolume=function(t,e,r){e=e||{};var a={volume_percent:t};"device_id"in e&&(a.device_id=e.device_id);var u={type:"PUT",url:s+"/me/player/volume",params:a};return n(u,e,r)},o.prototype.setShuffle=function(t,e,r){e=e||{};var a={state:t};"device_id"in e&&(a.device_id=e.device_id);var u={type:"PUT",url:s+"/me/player/shuffle",params:a};return n(u,e,r)},o.prototype.getShow=function(t,e,r){var a={};return a.url=s+"/shows/"+t,n(a,e,r)},o.prototype.getShows=function(t,e,r){var a={url:s+"/shows/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getMySavedShows=function(t,e){var r={url:s+"/me/shows"};return n(r,t,e)},o.prototype.addToMySavedShows=function(t,e,r){var a={url:s+"/me/shows",type:"PUT",postData:t};return n(a,e,r)},o.prototype.removeFromMySavedShows=function(t,e,r){var a={url:s+"/me/shows",type:"DELETE",postData:t};return n(a,e,r)},o.prototype.containsMySavedShows=function(t,e,r){var a={url:s+"/me/shows/contains",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getShowEpisodes=function(t,e,r){var a={url:s+"/shows/"+t+"/episodes"};return n(a,e,r)},o.prototype.getEpisode=function(t,e,r){var a={};return a.url=s+"/episodes/"+t,n(a,e,r)},o.prototype.getEpisodes=function(t,e,r){var a={url:s+"/episodes/",params:{ids:t.join(",")}};return n(a,e,r)},o.prototype.getAccessToken=function(){return d},o.prototype.setAccessToken=function(t){d=t},o.prototype.setPromiseImplementation=function(t){var e=!1;try{var r=new t(function(a){a()});typeof r.then=="function"&&typeof r.catch=="function"&&(e=!0)}catch(a){console.error(a)}if(e)p=t;else throw new Error("Unsupported implementation of Promises/A+")},o}();l.exports=c})(S);const U=q,M="dc1a3182526e4fddbc292110667c14f3",j="http://localhost:5173",C=["user-read-private","user-read-email"],m=new U,E=document.getElementById("login-button"),w=document.getElementById("start-button"),F=document.getElementById("playlist-container");E.addEventListener("click",()=>{window.location.href=`https://accounts.spotify.com/authorize?client_id=${M}&redirect_uri=${j}&scope=${C.join("%20")}&response_type=token&show_dialog=true`});function L(l,c,s){return(s-l)/(s-c)}w.addEventListener("click",async()=>{w.style.display="none",F.style.display="block";const l=await m.getMe(),c=await m.getUserPlaylists(l.id),s=await m.getPlaylistTracks(c.items[0].id),d=R(s.items);let p=0,i=null;function v(){if(p<d.length){const T=d[p];i=new Audio(T.track.preview_url),i.currentTime=0,i.play(),i.ontimeupdate=async()=>{if(i.currentTime>=20&&(i.ontimeupdate=null,i.pause(),p++,await new Promise(g=>{setTimeout(g,5e3)}),v()),i.currentTime>=15){const g=L(i.currentTime,15,20);i.volume=g}}}}v()});function R(l){for(let c=l.length-1;c>0;c--){const s=Math.floor(Math.random()*(c+1));[l[c],l[s]]=[l[s],l[c]]}return l}m.getAccessToken=()=>{const l=window.location.hash.match(/#access_token=([^&]*)/);return l?(E.style.display="none",w.style.display="block",l[1]):""};const k=m.getAccessToken();k&&m.setAccessToken(k);