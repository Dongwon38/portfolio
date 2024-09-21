// click event, get x and y
function click(e) {
  for (let i = 0; i < 50; i++) {
    createParticle(e.x, e.y);
  }
}

// random color pallete
const colors = ["#F5EC33", "#F57A18", "#D938B3", "#324BF0", "#30E6A3"];

function createParticle(x, y) {
  // create particle
  const particle = document.createElement("particle");
  document.body.appendChild(particle);

  // randomize particle size
  const size = Math.floor(Math.random() * 2 + 2);

  // randomize particle style
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.transform = `rotate(45deg)`;
  particle.style.background = `${
    colors[Math.floor(Math.random() * colors.length)]
  }`;

  // create random destination
  const destinationX = x + (Math.random() - 0.5) * 4 * 75;
  const destinationY = y + (Math.random() - 0.5) * 4 * 75;

  // store animation
  const animation = particle.animate(
    [
      {
        transform: `translate(${x}px, ${y}px)`,
        opacity: 1,
      },
      {
        transform: `translate(${destinationX}px, ${destinationY}px)`,
        opacity: 0,
      },
    ],
    {
      duration: 500 + Math.random() * 1000,
      easing: "cubic-bezier(0, 0.9, 0.57, 1)",
      delay: Math.random() * 200,
    }
  );

  animation.onfinish = () => {
    particle.remove();
  };
}

document.addEventListener("click", click);
document.addEventListener("touchstart", click);
