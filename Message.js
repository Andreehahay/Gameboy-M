// message.js
  document.getElementById("back").onclick = function() {
    history.back();
  };
  
  // Efek ketik per kata
  const message = `Hai sayang, selamat ulang tahun ya! <br>
Hari ini spesial banget karena kamu lahir di dunia ini dan aku jadi punya kesempatan buat kenal kamu. Aku bersyukur banget punya kamu di hidupku. Kamu itu nggak cuma pacar, tapi juga sahabat terbaik aku. Ingat nggak dulu pertama kali kita ketemu<br>
Aku nggak nyangka kalau orang yang awalnya cuma teman ngobrol ini bisa jadi segitu pentingnya buat aku. Kita udah ngelewatin banyak hal bareng, baik yang seneng-seneng sampe yang bikin stres. Tapi, tiap momen sama kamu selal bikin hidup aku lebih berwarna. Kamu selalu tau gimana caranya bikin aku ketawa, bahkan di hari-hari terburuk sekalipun. Semoga di ulang tahun kamu yang sekarang, semua harapan dan impian kamu bisa mulai tercapai satu per satu. Aku bakal selalu ada buat dukung kamu, apapun yang kamu pengen lakukan. Mari kita bikin lebih banyak kenangan manis dan seru di tahun-tahun ke depan. Sekali lagi, selamat ulang tahun ya, Sayang. <br>
Semoga hari ini penuh dengan kebahagiaan dan cinta. Aku sayang kamu banget!💓💓`;
  
  const messageContent = document.getElementById("message-content");
  const words = message.split(" ");
  let index = 0;
  
  function typeMessage() {
    if (index < words.length) {
      messageContent.innerHTML += words[index] + " ";
      index++;
      setTimeout(typeMessage, 150); // 150ms antar kata, bisa diatur kecepatannya
    }
  }
  
  window.onload = typeMessage;
  
  document.getElementById("next").onclick = function () {
    // Hentikan lagu sebelumnya jika masih bermain
    const currentMusic = document.getElementById("bg-music");
    currentMusic.pause();
    currentMusic.currentTime = 0;
  
    // Putar lagu baru
    const nextMusic = document.getElementById("next-music");
    nextMusic.play();
  
    // Setelah beberapa detik (misal 3 detik), lanjut redirect
    setTimeout(() => {
      window.location.href = "gallery.html";
    }, 3000); // 3000ms = 3 detik
  };
  
