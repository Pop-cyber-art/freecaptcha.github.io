const embedCodes = {
    recaptcha: `<script src="https://www.google.com/recaptcha/api.js" async defer></script>\n<div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5D4X09DSRZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5D4X09DSRZ');
</script>`,
    hcaptcha: `<script src="https://hcaptcha.com/1/api.js" async defer></script>\n<div class="h-captcha" data-sitekey="10000000-ffff-ffff-ffff-000000000001"></div><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5D4X09DSRZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5D4X09DSRZ');
</script>`,
    turnstile: `<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>\n<div class="cf-turnstile" data-sitekey="1x00000000000000000000AA"></div><!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-5D4X09DSRZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-5D4X09DSRZ');
</script>`
  };
  
  function copyEmbed(type) {
    const code = embedCodes[type];
    const textarea = document.getElementById('embed-output');
    textarea.value = code;
    textarea.select();
    document.execCommand('copy');
    alert(`✅ ${type} embed code copied!`);
  }
  
