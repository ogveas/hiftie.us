function smoothScroll(event, target) {
    event.preventDefault();
    const offset = document.querySelector('.navbar').offsetHeight;
    const element = document.getElementById(target);
    const topPos = element.offsetTop - offset;
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  }


  // In development
  
const customMenu = document.getElementById('custom-menu');
function showCustomMenu(event) {
  event.preventDefault();
  const x = event.clientX;
  const y = event.clientY;
  customMenu.style.left = x + 'px';
  customMenu.style.top = y + 'px';
  customMenu.style.display = 'block';
}

function hideCustomMenu() {
  customMenu.style.display = 'none';
}

document.addEventListener('contextmenu', showCustomMenu);
document.addEventListener('click', hideCustomMenu);

document.addEventListener('DOMContentLoaded', function() {
  var contactButton = document.querySelector('.contact-button');
  contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    window.open('contact.html', '_self');
  });
});

function sendMessage() {
  var webhookUrl = 'https://discord.com/api/webhooks/1115191918331183114/7wyiZk6xTMWHS2v3pfC8s6jzrrS8P-7EdH5xHf_rDXMFr35IHVX2LiCisNfY7Xznd9t9';
  var nameInput = document.querySelector('.your-name-placeholder');
  var mailInput = document.querySelector('.your-mail-placeholder');
  var messageInput = document.querySelector('.message-placeholder');

  var name = nameInput.value;
  var mail = mailInput.value;
  var message = messageInput.value;

  var data = {
    embeds: [
      {
        title: 'New Message for Hiftie!',
        description: `**Their Name:** ${name}\n**Their Mail:** ${mail}\n**Their Message:**\`\`\`${message}\`\`\``,
        color: parseInt('2b2d31', 16),
      }
    ]
  };

  if (name === '' || mail === '' || message === '') {
    if (name === '') {
      alert('Name is a required field.');
    }
    if (mail === '') {
      alert('Mail is a required field.');
    }
    if (message === '') {
      alert('Message is a required field.');
    }
    return;
  }

  if (mail.indexOf('@') === -1) {
    alert('Your Mail should contain "@".');
    return;
  }

  if (name.length > 50) {
    alert('You cannot write more than 50 characters');
    return;
  }

  if (mail.length > 50) {
    alert('You cannot write more than 50 characters');
    return;
  }

  if (message.length > 1000) {
    alert('You cannot write more than 1000 characters');
    return;
  }

  fetch(webhookUrl, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  })
  .then(function() {
      alert('Message sent successfully!');
  })
  .catch(function(error) {
      console.error('Error:', error);
  });
}

