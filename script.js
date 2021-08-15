$(window).scroll(function () {
  // set background nav to black when scrolled
  const mode = localStorage.getItem("mode");

  // cek posisi scroll
  const scroll = $(window).scrollTop();

  // cek posisi "about"
  if (scroll > $("#about").offset().top - 50) {
    if (mode == "dark") {
      $("nav").addClass("dark-theme--card");
      $("nav").removeClass("light-theme--card");
    } else {
      $("nav").addClass("light-theme--card");
      $("nav").removeClass("dark-theme--card");
    }
  } else {
    $("nav").removeClass("light-theme--card");
    $("nav").removeClass("dark-theme--card");
  }
});

$(document).ready(() => {
  // ambil dulu mode, ini function di run pas pertama kali web di buka
  const mode = localStorage.getItem("mode");
  if (mode === "dark") {
    // kalo mode gelap, otomatis tombol "switch" nya harus jadi 'ganti ke mode light' kan
    $(".toggle-mode").html("Light Mode"); // ganti ke mode light
    $("body").addClass("body-dark"); // body nya jadiin gelap
    $("body").removeClass("body-light"); // hapus css body terang
    $(".light-theme--text").each(function () {
      // karna 'light-theme--text' ga cuma satu, kita pake 'each'
      // 'this' itu artinya element yg di temukan dari function 'each'
      $(this).addClass("dark-theme--text"); // tiap ketemu element yg ada class 'dark-theme--text', tambahin 'dark-theme--text'
      $(this).removeClass("light-theme--text"); // hapus class 'light-theme--text'
    });
    $(".white--card").each(function () {
      // karna 'white--card' ga cuma satu, kita pake 'each'
      $(this).addClass("black--card"); // tiap ketemu element yg ada class 'white--card', tambahin 'black--card'
    });
    $(".black--card").each(function () {
      // karna 'black--card' ga cuma satu, kita pake 'each'
      $(this).removeClass("white--card"); // hapus class 'white--card'
    });
    $(".light-theme--card").each(function () {
      // karna 'light-theme--card' ga cuma satu, kita pake 'each'
      $(this).addClass("dark-theme--card"); // tiap ketemu element yg ada class 'light-theme--card', tambahin 'dark-theme--card'
      $(this).removeClass("light-theme--card"); // hapus class 'light-theme--card'
    });
    $(".third-wrapper h1").addClass("crimson--text");
    $(".third-wrapper h1").removeClass("black--text");
    $(".third-wrapper .third-page").addClass("black--text");
    $(".third-wrapper .third-page").removeClass("crimson--text");
    $(".footer-wrapper").css("background", "#313131");
    $(".btn").css("color", "#313131");
  }

  /*
   * notes *
   * disini aku make dark-theme--card dan light-theme--card itu cuma buat "background" aja
   */
  // SWITCHING TO DARK MODE
  else {
    $(".toggle-mode").html("Dark Mode");
    $("body").addClass("body-light");
    $("body").removeClass("body-dark");
    $(".dark-theme--text").each(function () {
      $(this).addClass("light-theme--text");
      $(this).removeClass("dark-theme--text");
    });
    $(".black--card").each(function () {
      $(this).addClass("white--card");
    });
    $(".white--card").each(function () {
      $(this).removeClass("black--card");
    });
    $(".dark-theme--card").each(function () {
      $(this).addClass("light-theme--card");
      $(this).removeClass("dark-theme--card");
    });
    $(".third-wrapper h1").addClass("black--text");
    $(".third-wrapper h1").removeClass("crimson--text");
    $(".third-wrapper .third-page").addClass("crimson--text");
    $(".third-wrapper .third-page").removeClass("black--text");
    $(".footer-wrapper").css("background", "crimson");
    $(".btn").css("color", "crimson");
  }
});
function toggle() {
  // toggle dark mode
  const mode = localStorage.getItem("mode");

  // SWITCHING TO LIGHT MODE
  if (mode === "dark") {
    $(".toggle-mode").html("Dark Mode");
    localStorage.setItem("mode", "light");
    $("body").addClass("body-light");
    $("body").removeClass("body-dark");
    $(".dark-theme--text").each(function () {
      $(this).addClass("light-theme--text");
      $(this).removeClass("dark-theme--text");
    });
    $(".black--card").each(function () {
      $(this).addClass("white--card");
    });
    $(".white--card").each(function () {
      $(this).removeClass("black--card");
    });
    $(".dark-theme--card").each(function () {
      $(this).addClass("light-theme--card");
      $(this).removeClass("dark-theme--card");
    });
    $(".third-wrapper h1").addClass("black--text");
    $(".third-wrapper h1").removeClass("crimson--text");
    $(".third-wrapper .third-page").addClass("crimson--text");
    $(".third-wrapper .third-page").removeClass("black--text");
    $(".footer-wrapper").css("background", "crimson");
    $(".btn").css("color", "crimson");
  }
  // SWITCHING TO DARK MODE
  else {
    $(".toggle-mode").html("Light Mode");
    localStorage.setItem("mode", "dark");
    $("body").addClass("body-dark");
    $("body").removeClass("body-light");
    $(".light-theme--text").each(function () {
      $(this).addClass("dark-theme--text");
      $(this).removeClass("light-theme--text");
    });
    $(".white--card").each(function () {
      $(this).addClass("black--card");
    });
    $(".black--card").each(function () {
      $(this).removeClass("white--card");
    });
    $(".light-theme--card").each(function () {
      $(this).addClass("dark-theme--card");
      $(this).removeClass("light-theme--card");
    });
    $(".third-wrapper h1").addClass("crimson--text");
    $(".third-wrapper h1").removeClass("black--text");
    $(".third-wrapper .third-page").addClass("black--text");
    $(".third-wrapper .third-page").removeClass("crimson--text");
    $(".footer-wrapper").css("background", "#313131");
    $(".btn").css("color", "#313131");
  }
}
