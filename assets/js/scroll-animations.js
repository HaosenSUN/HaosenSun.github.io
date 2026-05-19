document.addEventListener('DOMContentLoaded', function () {
  var content = document.querySelector('.page__content');
  if (!content) return;

  // --- Typewriter for the welcome heading ---
  var heading = Array.from(content.querySelectorAll('h2')).find(function (el) {
    return el.textContent.trim().startsWith('Welcome');
  });

  if (heading) {
    // Remove from reveal queue (we animate it ourselves)
    heading.classList.add('reveal', 'visible', 'typewriter-heading');

    var parts = [
      { text: "Welcome!",      bold: true,  italic: false },
      { text: " I'm ",        bold: false, italic: false },
      { text: "Haosen",       bold: false, italic: true  },
      { text: ".",            bold: false, italic: false }
    ];

    // Flatten to character tokens with style info
    var tokens = [];
    parts.forEach(function (part) {
      part.text.split('').forEach(function (ch) {
        tokens.push({ ch: ch, bold: part.bold, italic: part.italic });
      });
    });

    // Build cursor element
    var cursor = document.createElement('span');
    cursor.className = 'typewriter-cursor';
    cursor.textContent = '|';

    heading.textContent = '';
    heading.appendChild(cursor);

    var i = 0;
    function type() {
      if (i >= tokens.length) {
        // Blink 3s then remove cursor
        setTimeout(function () {
          cursor.style.animation = 'none';
          cursor.style.opacity = '0';
        }, 3000);
        return;
      }
      var t = tokens[i++];
      var node;
      if (t.bold && t.italic) {
        node = document.createElement('strong');
        var em = document.createElement('em');
        em.textContent = t.ch;
        node.appendChild(em);
      } else if (t.bold) {
        node = document.createElement('strong');
        node.textContent = t.ch;
      } else if (t.italic) {
        node = document.createElement('em');
        node.textContent = t.ch;
      } else {
        node = document.createTextNode(t.ch);
      }
      heading.insertBefore(node, cursor);
      setTimeout(type, 70);
    }
    setTimeout(type, 300);
  }

  // --- Scroll reveal ---
  var revealEls = content.querySelectorAll('h1, h2:not(:first-of-type), .paper-box, .page__content > p');
  revealEls.forEach(function (el) {
    if (!el.classList.contains('reveal')) el.classList.add('reveal');
  });

  var lists = content.querySelectorAll('ul');
  lists.forEach(function (ul) {
    ul.classList.add('reveal-list');
  });

  var allTargets = content.querySelectorAll('.reveal, .reveal-list');

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  allTargets.forEach(function (el) {
    observer.observe(el);
  });
});
