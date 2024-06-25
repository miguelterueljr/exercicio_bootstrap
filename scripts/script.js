const modalElementChosen = document.getElementById('modal');
const modalElementHarry = document.getElementById('modal-harry');
const modalElementCasaDePapel = document.getElementById('modal-casaPapel');
const modalElementMatrix = document.getElementById('modal-matrix');
const modalElementBadBoys = document.getElementById('modal-badBoys');

const myModalChosen = new bootstrap.Modal(modalElementChosen);
const myModalHarry = new bootstrap.Modal(modalElementHarry);
const myModalCasaDePapel = new bootstrap.Modal(modalElementCasaDePapel);
const myModalMatrix = new bootstrap.Modal(modalElementMatrix);
const myModalBadBoys = new bootstrap.Modal(modalElementBadBoys);

//evento the chosen
modalElementChosen.addEventListener('hide.bs.modal', function () {
  const video = document.getElementById('videoPlayer');
  video.pause();
});

//evento Harry
modalElementHarry.addEventListener('hide.bs.modal', function () {
  const videoHarry = document.getElementById('videoPlayerHarry');
  videoHarry.pause();
})

//evento la casa de Pàpel
modalElementCasaDePapel.addEventListener('hide.bs.modal', function () {
  const videoCasaDePapel = document.getElementById('videoPlayerCasaDePapel');
  videoCasaDePapel.pause();
})

//evento matrix
modalElementMatrix.addEventListener('hide.bs.modal', function () {
  const videoMatrix = document.getElementById('videoPlayerMatrix');
  videoMatrix.pause();
})

//evento bad boys
modalElementBadBoys.addEventListener('hide.bs.modal', function () {
  const videoBadBoys = document.getElementById('videoPlayerBadBoys');
  videoBadBoys.pause();
})



