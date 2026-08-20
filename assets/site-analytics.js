(() => {
  const measurementId = 'G-YF6FC9EBS3';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () {
    window.dataLayer.push(arguments);
  };

  const existingTag = document.querySelector(
    `script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`
  );

  if (!existingTag) {
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);
    window.gtag('js', new Date());
    window.gtag('config', measurementId);
  }

  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href]');
    if (!link) return;

    const href = link.getAttribute('href') || '';
    let contactMethod = '';

    if (href.startsWith('tel:')) contactMethod = 'phone';
    else if (href.startsWith('mailto:')) contactMethod = 'email';
    else if (href.includes('open.kakao.com')) contactMethod = 'kakao';
    else if (href.includes('blog.naver.com/dgmediconnect')) contactMethod = 'naver_blog';

    if (!contactMethod) return;

    if (contactMethod === 'naver_blog') {
      window.gtag('event', 'channel_click', {
        channel_name: contactMethod,
        link_url: link.href,
        page_path: window.location.pathname
      });
      return;
    }

    window.gtag('event', 'contact_click', {
      contact_method: contactMethod,
      link_url: link.href,
      page_path: window.location.pathname
    });
  });
})();
