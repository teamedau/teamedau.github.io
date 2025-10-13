console.log("Charts loaded successfully!");

// Mobile nav
function toggleMenu() {
  const mobileNav = document.querySelector(".mobile-nav");
  mobileNav.classList.toggle("display-none");
  console.log("toggling menu");
}

// INDUSTRIES DOUGHNUT CHART
const ctxIndustry = document.getElementById('industryChart');
new Chart(ctxIndustry, {
  type: 'doughnut',
  data: {
    labels: ['Tech', 'Design', 'Education', 'Marketing'],
    datasets: [{
      data: [50, 25, 15, 10],
      backgroundColor: ['#00BFFF', '#40E0D0', '#1E90FF', '#008B8B'],
      borderColor: '#ffffff',
      borderWidth: 5
    }]
  },
  options: {
    cutout: '70%',
    plugins: {
      legend: { position: 'bottom', labels: { color: '#232946', font: { size: 14 } } },
      title: { display: false }
    }
  }
});

// HUMAN SKILLS RADAR CHART
const ctxSkills = document.getElementById('skillsChart');
new Chart(ctxSkills, {
  type: 'radar',
  data: {
    labels: ['Leadership', 'Communication', 'Problem Solving', 'Initiative', 'Collaboration'],
    datasets: [{
      label: 'Skill Level',
      data: [80, 70, 85, 75, 65],
      fill: true,
      backgroundColor: 'rgba(0, 191, 255, 0.2)',
      borderColor: '#00BFFF',
      pointBackgroundColor: '#00BFFF',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      r: {
        angleLines: { color: '#e5e5e5' },
        grid: { color: '#f0f0f0' },
        suggestedMin: 0,
        suggestedMax: 100,
        pointLabels: { color: '#232946', font: { size: 13 } },
        ticks: { display: false }
      }
    },
    plugins: {
      legend: { display: false },
      title: { display: false }
    }
  }
});

// SKILLS BARS
  document.querySelectorAll('.bar .fill').forEach(el=>{
    const pct = Number(el.dataset.percent || 0);
    // clamp por seguridad
    el.style.width = Math.max(0, Math.min(100, pct)) + '%';
  });
  console.log("Skill bars set");

// LANGUAGE IMPROVEMENT BARS
  document.querySelectorAll('#panel-langimp .fill').forEach(el => {
    const percent = el.dataset.percent || 0;
    el.style.setProperty('--target', percent + '%');
  });
  console.log("Language improvement bars set");


