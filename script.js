// script.js

$(document).ready(function () {
    console.log("Page resume.html chargée.");
    updateAge();
});

// Fonction updateAge
function updateAge() {
    let val = $("#valeurAge").val();
    let annee = 2026;
    let aniv = 2007;
    let diff = annee - aniv;
    console.log(diff);
    $("#valeurAge").text(diff);
}

// Fonction charge liste des fichiers CV

document.addEventListener("DOMContentLoaded", () => {
  const cvList = document.getElementById("cvList");

  if (!cvList) return;

  fetch("cv_folder/files.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Impossible de charger la liste des CV.");
      }
      return response.json();
    })
    .then((files) => {
      if (!Array.isArray(files) || files.length === 0) {
        cvList.innerHTML = `
          <div class="alert alert-warning mb-0">
            No CV available for the moment.
          </div>
        `;
        return;
      }

      cvList.innerHTML = files.map((file) => `
        <div class="cv-item">
          <div class="cv-file-name">
            <i class="bi bi-file-earmark-pdf text-danger me-2"></i>
            ${file.name}
          </div>
          <div class="cv-actions">
            <a
              href="cv_folder/${file.url}"
              class="btn btn-outline-primary btn-sm"
              target="_blank"
              rel="noopener noreferrer"
              title="Open in browser"
            >
              <i class="bi bi-box-arrow-up-right me-1"></i>Open
            </a>
            <a
              href="cv_folder/${file.url}"
              class="btn btn-secondary btn-sm"
              download
              title="Download PDF"
            >
              <i class="bi bi-download"></i>
            </a>
          </div>
        </div>
      `).join("");
    })
    .catch(() => {
      cvList.innerHTML = `
        <div class="alert alert-danger mb-0">
          Unable to load the CV list.
        </div>
      `;
    });
});