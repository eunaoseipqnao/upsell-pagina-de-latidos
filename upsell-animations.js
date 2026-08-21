const revealGroups = [
  ['.desire .section-label, .desire h2', 'rise', 0],
  ['.wish-grid p', 'rise', 100],
  ['.transition .section-label, .transition h2, .transition .body-copy', 'rise', 120],
  ['.product .section-label, .product h2, .product .lead', 'rise', 0],
  ['.learn-grid span', 'pop', 55],
  ['.error-box > div', 'rise', 120],
  ['.included .section-label, .included h2', 'rise', 0],
  ['.included article', 'rise', 150],
  ['.offer-box', 'rise', 0],
  ['.objection .split > div', 'rise', 120],
  ['.compare-grid article', 'rise', 140],
  ['.final .section-label, .final h2, .final > .wrap > p, .final-summary, .final .price, .final .upsell-button-container, .decline', 'rise', 85]
];

revealGroups.forEach(([selector, effect, stagger]) => {
  document.querySelectorAll(selector).forEach((element, index) => {
    element.classList.add('reveal', `reveal-${effect}`);
    element.style.setProperty('--reveal-delay', `${index * stagger}ms`);
  });
});

document.querySelector('.hero-copy')?.classList.add('hero-enter');
document.querySelector('.hero-art')?.classList.add('hero-art-enter');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

// Ajustes finais de conversão: mesma estrutura e identidade, com hierarquia mais direta.
const heroHeading = document.querySelector('.hero h1');
if (heroHeading) heroHeading.innerHTML = 'Agora ensine seu Yorkshire a <em>obedecer de verdade.</em>';

const heroCta = document.querySelector('#upsell-button-container .cta');
if (heroCta) heroCta.innerHTML = 'QUERO UM YORKSHIRE CALMO E OBEDIENTE <b>→</b>';

const heroContainer = document.querySelector('#upsell-button-container');
if (heroContainer && !document.querySelector('.hero-price')) {
  heroContainer.insertAdjacentHTML('beforebegin', '<div class="hero-price"><span>De <s>R$ 67,00</s></span><strong>Por apenas <b>R$ 27,00</b></strong></div>');
}

const heroGrid = document.querySelector('.hero-grid');
const heroArt = document.querySelector('.hero-art');
if (heroGrid && heroArt) heroGrid.appendChild(heroArt);

const productLead = document.querySelector('.product .lead');
if (productLead && !document.querySelector('.product-bridge')) {
  productLead.insertAdjacentHTML('afterend', '<p class="product-bridge">Em vez de apenas corrigir comportamentos isolados, você começa a construir um Yorkshire que entende o que você espera dele.</p>');
}

const finalHeading = document.querySelector('.final h2');
if (finalHeading) finalHeading.textContent = 'Não pare nos latidos. Ensine seu Yorkshire a obedecer de verdade.';

const objection = document.querySelector('.objection');
if (objection) {
  objection.innerHTML = `<div class="wrap objection-content">
    <p class="section-label">Uma dúvida comum</p>
    <h2>“Mas eu acabei de comprar um treinamento para latidos...”</h2>
    <div class="objection-copy">
      <p>Sim. E ele continua sendo sua solução específica para controlar os latidos.</p>
      <p>O Yorkshire Calmo e Obediente tem outro objetivo: <strong>ensinar comandos, atenção, limites e obediência</strong> para melhorar toda a convivência com seu Yorkshire.</p>
      <p>Um produto não substitui o outro. Eles se complementam.</p>
    </div>
  </div>`;
}

document.querySelectorAll('.final .cta').forEach((button) => {
  button.innerHTML = 'QUERO UM YORKSHIRE CALMO E OBEDIENTE <b>→</b>';
});

const conversionStyles = document.createElement('style');
conversionStyles.textContent = `
  .hero-grid{display:flex;flex-direction:column;align-items:center;gap:28px}.hero-copy{width:100%;max-width:760px;text-align:center}.hero-copy .lead{margin-inline:auto;max-width:670px}.hero-copy .eyebrow{justify-content:center}.hero-copy .trust{justify-content:center}.hero-mobile-image{display:none!important}.hero-copy .upsell-button-container{margin-inline:auto;width:min(100%,580px)}.hero-art{width:min(100%,500px);margin:0 auto;padding:13px}.hero-art:after{left:50%;bottom:7%;transform:translateX(-50%);white-space:nowrap}.hero-art img{width:100%}
  .section{padding-block:70px}.hero{padding-top:28px;padding-bottom:62px}
  .hero-price{margin:21px 0 -2px;color:var(--muted);font-size:.84rem;font-weight:600}.hero-price span{display:block}.hero-price s{text-decoration-color:#e34b43;text-decoration-thickness:2px}.hero-price strong{display:block;color:var(--green);font-size:1.15rem;line-height:1.35}.hero-price b{font-size:1.7rem;font-weight:800;letter-spacing:-.04em}
  .cta,.final .cta{font-size:1rem}.product-bridge{max-width:640px;margin:17px auto 0;color:var(--muted);font-size:.96rem;line-height:1.65}.product-bridge+.learn-grid{margin-top:34px}
  .path{gap:16px}.path b{min-width:205px;padding:17px 22px;font-size:1rem}.path i{font-size:1.2rem;margin-left:28px}
  .included article span{display:inline-block;margin-bottom:12px;font-size:1rem;font-weight:800}.included article h3{margin-bottom:13px}.included article strong{display:block;color:var(--green);font-size:.95rem}
  .offer-box .price{margin:18px auto 5px}.offer-box .upsell-button-container{margin-top:19px}
  .objection{padding-block:88px 44px}.objection-content{max-width:760px;text-align:center}.objection h2{max-width:720px;margin:0 auto 22px;font-size:clamp(1.8rem,3vw,2.55rem);line-height:1.18}.objection-copy{max-width:650px;margin:0 auto;color:var(--muted);font-size:1rem;line-height:1.7}.objection-copy p{margin-bottom:15px}.objection-copy p:last-child{margin-bottom:0;color:var(--ink);font-weight:600}.comparison{padding-top:44px}
  .final .price strong{color:#ffd287;text-shadow:0 2px 14px #0004}.final .price span{color:#d5e0e4}.final .price s{text-decoration-color:#ed8426}
  @media(max-width:720px){.hero-grid{gap:24px}.hero-copy{max-width:100%}.hero-art{width:min(100%,430px);padding:8px}.hero-art:after{font-size:.72rem}.section{padding-block:56px}.hero{padding-top:22px;padding-bottom:52px}.hero-price{margin-top:17px}.hero-price b{font-size:1.55rem}.cta,.final .cta{font-size:.84rem;line-height:1.25}.path b{min-width:190px;padding:15px 18px;font-size:.95rem}.product-bridge{font-size:.92rem}.offer-box .price{margin-top:14px}.offer-box .upsell-button-container{margin-top:16px}.objection{padding-block:64px 32px}.objection h2{font-size:clamp(1.6rem,7.5vw,2rem);margin-bottom:18px}.objection-copy{font-size:.94rem}.comparison{padding-top:32px}}
`;
document.head.appendChild(conversionStyles);

// Versão curta do upsell: cinco áreas, dois momentos de CTA e sem argumentos repetidos.
document.querySelector('main').innerHTML = `
  <section class="hero section compact-hero"><div class="wrap compact-hero-content">
    <p class="eyebrow"><span></span>Oferta especial pós-compra</p>
    <p class="urgency-title">ANTES DE CONTINUAR...</p>
    <p class="urgency-copy">Você tem uma condição especial disponível nesta etapa da sua compra.</p>
    <h1>Agora ensine seu Yorkshire a <em>obedecer de verdade.</em></h1>
    <p class="lead">Complete o treinamento do seu Yorkshire com um plano prático de obediência, comandos e autocontrole em poucos minutos por dia.</p>
    <div class="hero-price"><span>De <s>R$ 67,00</s></span><strong>R$ 27,00</strong><small>Condição especial para clientes do Método Latidos Sob Controle</small></div>
    <div id="upsell-button-container" class="upsell-button-container"><!-- Substitua este conteúdo pelo HTML oficial do upsell Kiwify. --><a class="cta" href="#final">QUERO UM YORKSHIRE CALMO E OBEDIENTE <b>→</b></a></div>
    <p class="trust"><span>✓</span> Pagamento único <span>✓</span> Acesso imediato <span>✓</span> Adicione sem preencher seus dados novamente</p>
    <div class="hero-art"><img src="assets/yorkshire-hero.png" alt="Yorkshire Calmo e Obediente"><span class="image-seal">88 páginas · 18 capítulos</span></div>
  </div></section>
  <section class="section compact-benefits"><div class="wrap"><div class="center narrow"><h2>Com este treinamento, você vai trabalhar:</h2></div><div class="wish-grid"><p>Atenção quando você chama</p><p>Comandos básicos</p><p>Limites e autocontrole</p><p>Vir quando chamado</p><p>Comportamento dentro de casa</p><p>Passeios mais tranquilos</p></div><div class="compact-bridge center"><h2>Controlar os latidos é o primeiro passo.</h2><p>Agora você pode ensinar seu Yorkshire a prestar atenção, entender comandos e responder melhor às suas orientações.</p><strong>Latidos Sob Controle resolve os latidos. Yorkshire Calmo e Obediente desenvolve obediência.</strong></div></div></section>
  <section class="section compact-included"><div class="wrap"><div class="center narrow"><p class="section-label">Acesso imediato</p><h2>Você recebe tudo isso imediatamente:</h2></div><div class="included-grid"><article><span>01</span><h3>Guia Completo</h3><strong>88 páginas e 18 capítulos</strong><p>Um plano organizado mostrando o que ensinar, como ensinar e quando avançar.</p></article><article><span>02</span><h3>Cartões de Comandos</h3><p>Consulta rápida para usar durante os treinamentos.</p></article><article><span>03</span><h3>Checklists de Acompanhamento</h3><p>Acompanhe a evolução do seu Yorkshire e saiba quais pontos continuar trabalhando.</p></article></div></div></section>
  <section class="section compact-comparison"><div class="wrap"><div class="center narrow"><p class="section-label">Por que os dois se complementam?</p><h2>“Mas eu já comprei o Método Latidos Sob Controle...”</h2><p>Sim. Ele continua sendo sua solução específica para controlar os latidos.</p><p>O Yorkshire Calmo e Obediente vai além: trabalha comandos, atenção, limites e obediência para melhorar toda a convivência.</p></div><div class="compare-grid"><article><p>Seu produto atual</p><h3>Método Latidos Sob Controle</h3><strong>Controlar e reduzir latidos excessivos.</strong></article><article><p>Seu próximo passo</p><h3>Yorkshire Calmo e Obediente</h3><strong>Obediência, comandos, atenção e autocontrole.</strong></article></div><p class="complement center">Um resolve os latidos. O outro ensina seu Yorkshire a responder melhor a você.</p></div></section>
  <section id="final" class="section final compact-final"><div class="wrap center narrow"><p class="section-label">Sua condição especial</p><h2>Não pare nos latidos. Ensine seu Yorkshire a obedecer de verdade.</h2><p>Adicione agora o treinamento completo de obediência ao seu pedido.</p><div class="final-summary"><strong>Yorkshire Calmo e Obediente</strong><span>✓ 88 páginas</span><span>✓ 18 capítulos</span><span>✓ Cartões</span><span>✓ Checklists</span></div><div class="price mini"><span>De <s>R$ 67,00</s></span><strong>R$ 27,00</strong></div><p class="final-urgency">Esta condição especial está disponível nesta etapa da sua compra.</p><div id="upsell-button-container-final" class="upsell-button-container"><!-- Substitua este conteúdo pelo HTML oficial do upsell Kiwify. --><a class="cta" href="#final">SIM! QUERO ADICIONAR AO MEU PEDIDO <b>→</b></a><small>Adicionar Yorkshire Calmo e Obediente por <strong>R$ 27,00</strong></small></div><a id="decline-upsell" class="decline" href="#">Não, obrigado. Quero continuar apenas com minha compra atual.</a></div></section>`;

const shortStyles = document.createElement('style');
shortStyles.textContent = `
  .section{padding-block:62px}.compact-hero{padding-top:34px;padding-bottom:46px}.compact-hero-content{max-width:780px;text-align:center}.compact-hero .eyebrow,.compact-hero .trust{justify-content:center}.urgency-title{margin:13px 0 4px;color:var(--green);font-size:clamp(1.65rem,3.5vw,2.5rem);font-weight:800;letter-spacing:-.04em}.urgency-copy{max-width:530px;margin:0 auto 22px;color:var(--muted);font-weight:600}.compact-hero h1{max-width:740px;margin:0 auto 17px}.compact-hero .lead{margin-inline:auto;max-width:620px}.compact-hero .hero-price{margin:18px 0 0}.compact-hero .hero-price strong{font-size:clamp(2.45rem,5vw,3.5rem);line-height:1.1}.compact-hero .hero-price small{display:block;margin-top:3px;color:var(--muted);font-size:.78rem;font-weight:600}.compact-hero .upsell-button-container{margin:18px auto 0;width:min(100%,580px)}.compact-hero .trust{margin:16px auto 23px}.compact-hero .hero-art{position:relative;width:min(100%,430px);margin:0 auto;padding:10px}.compact-hero .hero-art:after{display:none}.image-seal{position:absolute;left:50%;bottom:18px;transform:translateX(-50%);white-space:nowrap;border-radius:999px;background:#fff;color:var(--green);box-shadow:0 8px 20px #173e5320;padding:9px 13px;font-size:.76rem;font-weight:800}.compact-benefits{padding-block:42px;background:#fff}.compact-benefits h2{font-size:clamp(1.75rem,3vw,2.45rem)}.compact-benefits .wish-grid{margin-top:26px}.compact-bridge{max-width:760px;margin:40px auto 0;padding-top:33px;border-top:1px solid var(--line)}.compact-bridge h2{font-size:clamp(1.65rem,3vw,2.25rem);margin-bottom:10px}.compact-bridge p{max-width:650px;margin:0 auto 12px;color:var(--muted)}.compact-bridge strong{color:var(--green);font-size:.94rem}.compact-included{padding-block:52px;background:#fff7ed}.compact-included .included-grid{margin-top:28px}.compact-included .included-grid article{padding:23px}.compact-comparison{padding-block:54px;background:#fff}.compact-comparison .narrow>p{color:var(--muted);margin:0 auto 10px;max-width:650px}.compact-comparison .compare-grid{margin-top:26px}.complement{margin:22px auto 0;color:var(--green);font-weight:700}.compact-final{padding-block:64px}.final-urgency{margin:19px auto -4px;color:#ffd287;font-size:.9rem;font-weight:700}.compact-final .upsell-button-container{margin-top:20px}.compact-final .price{margin:18px auto 0}@media(max-width:720px){.section{padding-block:46px}.compact-hero{padding-top:26px;padding-bottom:36px}.urgency-title{font-size:1.65rem}.urgency-copy{font-size:.9rem;margin-bottom:18px}.compact-hero h1{font-size:2.2rem}.compact-hero .hero-art{width:min(100%,370px)}.compact-benefits{padding-block:38px}.compact-benefits .wish-grid{grid-template-columns:1fr 1fr}.compact-benefits .wish-grid p{font-size:.8rem;padding:14px 11px}.compact-bridge{margin-top:29px;padding-top:27px}.compact-included .included-grid{gap:12px}.compact-comparison{padding-block:46px}.compact-comparison .compare-grid{grid-template-columns:1fr}.compact-final{padding-block:52px}.compact-final .cta{font-size:.82rem}}
`;
document.head.appendChild(shortStyles);

// Ajuste de hierarquia no topo: conquista atual, seguida do próximo passo.
const compactHero = document.querySelector('.compact-hero-content');
if (compactHero) {
  const label = compactHero.querySelector('.eyebrow');
  const urgencyTitle = compactHero.querySelector('.urgency-title');
  const urgencyCopy = compactHero.querySelector('.urgency-copy');
  const heroTitle = compactHero.querySelector('h1');
  if (label) label.innerHTML = '<span></span>Seu próximo passo começa aqui';
  urgencyTitle?.remove();
  urgencyCopy?.remove();
  if (heroTitle && !compactHero.querySelector('.hero-transition')) {
    heroTitle.insertAdjacentHTML('beforebegin', '<p class="urgency-title hero-transition">Você já sabe como lidar com os latidos.</p>');
  }
}

const topLabel = document.querySelector('.compact-hero-content .eyebrow');
if (topLabel) {
  topLabel.innerHTML = '<span></span>Disponível somente nesta oferta';
  if (!document.querySelector('.top-urgency')) {
    topLabel.insertAdjacentHTML('afterend', '<p class="urgency-copy top-urgency">Esta condição especial não estará disponível depois que você continuar.</p>');
  }
}

const urgencyColor = document.createElement('style');
urgencyColor.textContent = '.compact-hero .eyebrow,.compact-hero .top-urgency{color:#c83f3a}.compact-hero .eyebrow span{background:#c83f3a}';
document.head.appendChild(urgencyColor);

const complementSection = document.querySelector('.compact-comparison');
if (complementSection) {
  complementSection.innerHTML = `<div class="wrap"><div class="center narrow"><p class="section-label">Importante: você não perde sua compra anterior</p><h2>Ao adicionar esta oferta, você continua com acesso ao Método Latidos Sob Controle.</h2><div class="access-copy"><p>Se você aceitar esta oferta, você não troca um produto pelo outro. <strong>Você fica com os dois.</strong></p><p>O Método Latidos Sob Controle continua sendo seu guia para reduzir e controlar os latidos.</p><p>O Yorkshire Calmo e Obediente entra como complemento para ensinar comandos, atenção, limites e obediência.</p><p>Ou seja: você <strong>mantém sua compra anterior</strong> e ainda <strong>adiciona um novo treinamento</strong> para completar a evolução do seu Yorkshire.</p></div></div><div class="compare-grid"><article><p>Você já garantiu</p><h3>Método Latidos Sob Controle</h3><span>Você continua com acesso a este treinamento normalmente.</span><strong>Função: controlar e reduzir latidos excessivos.</strong></article><article><p>Você também adiciona</p><h3>Yorkshire Calmo e Obediente</h3><span>Ao aceitar esta oferta, este treinamento é somado ao seu pedido.</span><strong>Função: obediência, comandos, atenção e autocontrole.</strong></article></div><p class="complement center">Você não perde o que já comprou. Você apenas completa o treinamento do seu Yorkshire com uma nova oferta complementar.</p></div>`;
}

const complementStyles = document.createElement('style');
complementStyles.textContent = '.compact-comparison .access-copy{max-width:680px;margin:0 auto;color:var(--muted);line-height:1.65}.compact-comparison .access-copy p{margin:0 0 10px}.compact-comparison .access-copy p:last-child{margin-bottom:0}.compact-comparison .compare-grid article span{display:block;margin:11px 0;color:var(--muted);font-size:.9rem;line-height:1.55}.compact-comparison .compare-grid article strong{display:block;color:var(--green);font-size:.91rem}.compact-comparison .complement{max-width:750px;font-size:.95rem}';
document.head.appendChild(complementStyles);

if (complementSection) {
  complementSection.innerHTML = `<div class="wrap"><div class="center narrow"><p class="section-label">Importante: sua compra anterior continua garantida</p><h2>Você continua com o Método Latidos Sob Controle.</h2><div class="access-copy"><p>Ao aceitar esta oferta, você <strong>não troca um produto pelo outro</strong>. Você mantém o treinamento de latidos e <strong>adiciona o Yorkshire Calmo e Obediente</strong> ao seu acesso.</p></div></div><div class="compare-grid"><article><p>Você já garantiu</p><h3>Método Latidos Sob Controle</h3><span>✓ Continua no seu acesso</span><strong>Foco: controlar e reduzir latidos.</strong></article><article><p>Você também adiciona</p><h3>Yorkshire Calmo e Obediente</h3><span>✓ Novo treinamento complementar</span><strong>Foco: comandos, atenção, limites e obediência.</strong></article></div><p class="complement center">Você fica com os dois.</p></div>`;
}

const shortAccessStyles = document.createElement('style');
shortAccessStyles.textContent = '.compact-comparison{padding-block:44px}.compact-comparison h2{margin-bottom:14px}.compact-comparison .compare-grid{margin-top:20px}.compact-comparison .complement{margin-top:16px;font-size:1.15rem}.compact-comparison .compare-grid article span{color:#1c9463;font-weight:700}@media(max-width:720px){.compact-comparison{padding-block:38px}.compact-comparison .complement{font-size:1.05rem}}';
document.head.appendChild(shortAccessStyles);

const heroCarousel = document.querySelector('.compact-hero .hero-art');
if (heroCarousel) {
  const slides = [
    ['assets/carousel/capa.png', 'Capa do treinamento Yorkshire Calmo e Obediente'],
    ['assets/carousel/boas-vindas.png', 'Página de boas-vindas do treinamento'],
    ['assets/carousel/antes-depois.png', 'Página antes e depois do treinamento'],
    ['assets/carousel/como-aprende.png', 'Capítulo sobre como o Yorkshire aprende'],
    ['assets/carousel/erros-comuns.png', 'Página sobre erros comuns no começo']
  ];
  let activeSlide = 0;
  heroCarousel.classList.add('hero-carousel');
  heroCarousel.innerHTML = `<div class="carousel-stage">${slides.map(([src, alt], index) => `<img class="carousel-slide${index === 0 ? ' is-active' : ''}" src="${src}" alt="${alt}">`).join('')}</div><button class="carousel-arrow carousel-prev" type="button" aria-label="Imagem anterior">‹</button><button class="carousel-arrow carousel-next" type="button" aria-label="Próxima imagem">›</button><div class="carousel-dots" aria-label="Selecionar página">${slides.map((_, index) => `<button type="button" class="carousel-dot${index === 0 ? ' is-active' : ''}" aria-label="Ir para imagem ${index + 1}"></button>`).join('')}</div><span class="image-seal">88 páginas · 18 capítulos</span>`;
  const showSlide = (next) => {
    activeSlide = (next + slides.length) % slides.length;
    heroCarousel.querySelectorAll('.carousel-slide,.carousel-dot').forEach((element, index) => element.classList.toggle('is-active', index === activeSlide));
  };
  heroCarousel.querySelector('.carousel-prev').addEventListener('click', () => showSlide(activeSlide - 1));
  heroCarousel.querySelector('.carousel-next').addEventListener('click', () => showSlide(activeSlide + 1));
  heroCarousel.querySelectorAll('.carousel-dot').forEach((dot, index) => dot.addEventListener('click', () => showSlide(index)));
  let carouselTimer = setInterval(() => showSlide(activeSlide + 1), 5000);
  heroCarousel.addEventListener('mouseenter', () => clearInterval(carouselTimer));
  heroCarousel.addEventListener('mouseleave', () => { carouselTimer = setInterval(() => showSlide(activeSlide + 1), 5000); });
}

const carouselStyles = document.createElement('style');
carouselStyles.textContent = `.compact-hero .hero-carousel{width:min(100%,370px);padding:8px;overflow:hidden}.hero-carousel .carousel-stage{position:relative;aspect-ratio:5/7;border-radius:14px;overflow:hidden;background:#fff}.hero-carousel .carousel-slide{position:absolute;inset:0;width:100%;height:100%;margin:0!important;object-fit:cover;opacity:0;transform:scale(1.02);transition:opacity .38s ease,transform .5s ease}.hero-carousel .carousel-slide.is-active{opacity:1;transform:scale(1)}.hero-carousel .carousel-arrow{position:absolute;top:50%;z-index:2;width:34px;height:34px;border:0;border-radius:50%;background:#215d73;color:#fff;box-shadow:0 4px 12px #173e5340;font-size:26px;line-height:28px;cursor:pointer;transform:translateY(-50%)}.hero-carousel .carousel-prev{left:15px}.hero-carousel .carousel-next{right:15px}.hero-carousel .carousel-dots{position:absolute;z-index:2;left:50%;bottom:41px;display:flex;gap:6px;transform:translateX(-50%)}.hero-carousel .carousel-dot{width:7px;height:7px;padding:0;border:0;border-radius:50%;background:#fff9;cursor:pointer}.hero-carousel .carousel-dot.is-active{width:20px;border-radius:99px;background:#ed8426}.hero-carousel .image-seal{bottom:14px;font-size:.69rem;padding:7px 11px}@media(max-width:720px){.compact-hero .hero-carousel{width:min(100%,335px)}.hero-carousel .carousel-arrow{width:32px;height:32px}.hero-carousel .carousel-dots{bottom:39px}}`;
document.head.appendChild(carouselStyles);

const heroSubheadline = document.querySelector('.compact-hero .lead');
if (heroSubheadline) {
  heroSubheadline.textContent = 'Um plano prático com 88 páginas e 18 capítulos para ensinar comandos, limites e autocontrole ao seu Yorkshire, com uma sequência clara do que ensinar, como ensinar e quando avançar.';
}

// Única instância oficial da Kiwify: a ação financeira permanece exclusivamente no script deles.
const officialUpsellContainer = document.querySelector('#upsell-button-container-final');
if (officialUpsellContainer) {
  officialUpsellContainer.innerHTML = `<div style="text-align:center" id="kiwify-upsell-MyIlj0E" data-upsell-url="" data-downsell-url="https://seu-yorkshire-calmo-e-obediente-b4psm4ebv.vercel.app/downsell.html"><button id="kiwify-upsell-trigger-MyIlj0E" style="background-color:#5383ad;padding:12px 16px;cursor:pointer;color:#FFFFFF;font-weight:600;border-radius:4px;border:1px solid #5383ad;font-size:20px;">QUERO UM YORKSHIRE CALMO E OBEDIENTE →</button><p class="kiwify-price-copy">Adicionar Yorkshire Calmo e Obediente por R$ 27,00</p><p class="kiwify-trust">✓ Pagamento único · ✓ Acesso imediato · ✓ Sem preencher seus dados novamente</p><div id="kiwify-upsell-cancel-trigger-MyIlj0E" style="margin-top:1rem;cursor:pointer;font-size:16px;text-decoration:underline;font-family:sans-serif;">Não, obrigado. Quero continuar apenas com minha compra atual.</div></div>`;
}

if (!document.querySelector('script[src="https://snippets.kiwify.com/upsell/upsell.min.js"]')) {
  const kiwifyScript = document.createElement('script');
  kiwifyScript.src = 'https://snippets.kiwify.com/upsell/upsell.min.js';
  kiwifyScript.async = true;
  document.body.appendChild(kiwifyScript);
}

const kiwifyStyles = document.createElement('style');
kiwifyStyles.textContent = `#kiwify-upsell-MyIlj0E{text-align:center!important}#kiwify-upsell-trigger-MyIlj0E{display:flex!important;align-items:center;justify-content:center;width:100%!important;min-height:57px!important;padding:17px 19px!important;border:0!important;border-radius:12px!important;background:#ed8426!important;color:#fff!important;box-shadow:0 5px 0 #bd6114,0 12px 24px #ed84263d!important;font-family:Inter,Arial,sans-serif!important;font-size:1rem!important;font-weight:800!important;line-height:1.25!important;letter-spacing:.01em!important;cursor:pointer!important;transition:transform .2s ease,background .2s ease,box-shadow .2s ease!important}#kiwify-upsell-trigger-MyIlj0E:hover{background:#d97018!important;transform:translateY(1px)!important;box-shadow:0 3px 0 #ad5713,0 9px 19px #ed84263d!important}.kiwify-price-copy{margin:10px 0 0!important;color:#d5e0e4!important;font-size:.84rem!important}.kiwify-price-copy strong{color:inherit}.kiwify-trust{margin:11px 0 0!important;color:#d5e0e4!important;font-size:.75rem!important;font-weight:600!important}#kiwify-upsell-cancel-trigger-MyIlj0E{margin-top:25px!important;color:#d5e0e4!important;font-family:Inter,Arial,sans-serif!important;font-size:.82rem!important;text-align:center!important;text-decoration:underline!important;cursor:pointer!important}@media(max-width:720px){#kiwify-upsell-trigger-MyIlj0E{font-size:.82rem!important;padding:16px 12px!important}.kiwify-trust{font-size:.7rem!important}}`;
document.head.appendChild(kiwifyStyles);

// Remove somente o link visual legado; a recusa oficial da Kiwify permanece intacta.
document.querySelectorAll('#decline-upsell').forEach((element) => element.remove());

// O CTA da hero só desloca a página após clique manual; não usa hash na URL.
const finalOffer = document.querySelector('.compact-final');
if (finalOffer) finalOffer.id = 'oferta';

const heroCtaLink = document.querySelector('#upsell-button-container .cta');
if (heroCtaLink) {
  const heroScrollButton = document.createElement('button');
  heroScrollButton.type = 'button';
  heroScrollButton.id = 'hero-scroll-cta';
  heroScrollButton.className = heroCtaLink.className;
  heroScrollButton.innerHTML = heroCtaLink.innerHTML;
  heroCtaLink.replaceWith(heroScrollButton);
  heroScrollButton.addEventListener('click', () => {
    const offer = document.getElementById('oferta');
    if (offer) offer.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (window.location.hash === '#oferta') {
  history.replaceState(null, '', window.location.pathname + window.location.search);
}
window.scrollTo(0, 0);
window.addEventListener('pageshow', () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
});

const heroScrollStyles = document.createElement('style');
heroScrollStyles.textContent = '#hero-scroll-cta{border:0;cursor:pointer;font-family:Inter,Arial,sans-serif}';
document.head.appendChild(heroScrollStyles);
