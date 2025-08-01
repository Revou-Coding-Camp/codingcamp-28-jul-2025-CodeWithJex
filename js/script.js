const form = document.getElementById("form");
const output = document.getElementById("output");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  const tgl = document.getElementById("tgl").value.trim();
  const jk = document.querySelector('input[name="jk"]:checked')?.value || "";
  const pesan = document.getElementById("pesan").value.trim();

  if (!nama || !tgl || !jk || !pesan) {
    alert("Semua kolom harus diisi!");
    return;
  }

  const time = new Date().toLocaleString();
  output.innerHTML = `
        <b>Current time :</b> ${time}<br>
        <b>Nama :</b> ${nama}<br>
        <b>Tanggal Lahir :</b> ${tgl}<br>
        <b>Jenis Kelamin :</b> ${jk}<br>
        <b>Pesan :</b> ${pesan}
      `;
});

function enterSite() {
  const name = document.getElementById("popupName").value.trim();
  if (name !== "") {
    document.getElementById("userName").innerText = name;
    document.getElementById("popup").style.display = "none";
  } else {
    alert("Silakan isi nama terlebih dahulu");
  }
}

function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
