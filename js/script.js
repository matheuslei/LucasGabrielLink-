function alterarImagem(avatar) {
  let id = document.getElementById('avatar');
  if ((avatar = id)) {
    document.getElementById('avatar').src = 'QRCodeRocketCoffee.png';
    document.getElementById('avatar').id = 'qrcode';
  } else {
    document.getElementById('qrcode').src =
      'https://media-exp1.licdn.com/dms/image/C4E03AQE9WWHZnTLhOw/profile-displayphoto-shrink_100_100/0/1647286756781?e=1666224000&v=beta&t=l9DSmk-De0j0S6gzbwW63K6e3owwq5mW_GM6--Yfnts ';
    document.getElementById('qrcode').id = 'avatar';
  }
}
