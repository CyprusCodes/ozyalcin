export const casaOliva2 = {
  key: "casa-oliva-2",
  mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3254.796776575385!2d33.29164990425093!3d35.33586770268108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de13e57ed0cadf%3A0xb071ce70639505ee!2zQ2FzYSBPbGl2YSBieSDDlnp5YWzDp8Sxbg!5e0!3m2!1str!2str!4v1771844312405!5m2!1str!2str",
  mapUrl: "https://maps.app.goo.gl/9dHpCX8s1k2WKZCE8",
  slug:"casa-oliva-2",
  meta: {
    title: "CASA OLIVA 2 by Özyalçın",
    description:
      "Girne Zeytinlik bölgesinde konumlanmış Casa Oliva 2 projesi. Doğanın içinde şehrin yanı başında lüks yaşam alanları.",
  },

  header: {
    brandLogo: "/images/projects/casa-oliva-2/brand/ozyalcinlogo.jpg",
    phone1: "+90 (392) 650 2900",
    phone1Href: "tel:+903926502900",
    phone2: "+90 (548) 850 2900",
    phone2Href: "tel:+905488502900",
  },

  hero: {
    projectLogo: "/images/projects/casa-oliva-2/brand/casa-oliva-logo.png",
    lead: "DOĞA İLE DOST, DOĞA İLE UYUMLU BİR YAŞAM.",
    info: [
      { k: "Şehir", v: "Girne" },
      { k: "Tapu", v: "Türk Tapulu" },
      { k: "Bölge", v: "Zeytinlik" },
    ],
    bgImage: "/images/projects/casa-oliva-2/proje/p02.jpg",
    strip: [
      "/images/projects/casa-oliva-2/hero/h01.jpg",
      "/images/projects/casa-oliva-2/hero/h02.jpg",
      "/images/projects/casa-oliva-2/hero/h03.jpg",
      "/images/projects/casa-oliva-2/hero/h04.jpg",
    ],
     miniCards: [
      { title: "Hızlı dönüş", text: "Genelde aynı gün dönüş." },
      { title: "Türk Tapulu", text: "Güvenli yatırım fırsatı." },
      { title: "Girne / Zeytinlik", text: "Merkezi lokasyon." },
    ],
  },

  form: {
  scriptUrl: "https://script.google.com/macros/s/AKfycbz6l3RyHmSnIGfo1TMbCJ97uiCJ0ZC16Hxy857m_zE5ZygQx6by5FN7YxICelfYAqvG/exec"
},

  overview: {
    image: "/images/projects/casa-oliva-2/plan/genelbakis.jpg",
    title: "Genel Bakış",
    chips: ["Girne / Zeytinlik", "Türk Tapulu", "Butik Proje"],
    text:
      "Girne merkeze sadece birkaç dakika uzaklıkta, zeytin ağaçlarının huzur veren dokusu içinde konumlanan Casa Oliva 2; doğayla iç içe ama şehir yaşamından kopmadan seçkin bir hayat sunar. Yalnızca 10 Türk tapulu villadan oluşan bu butik projede, doğal tonlar, zarif mimari detaylar ve işlevsel iç mekan çözümleriyle konforlu ve zamansız yaşam alanları tasarlanmıştır.",
    kpis: [
      { val: "4.000 m²", lbl: "Proje alanı" },
      { val: "10 Villa", lbl: "A / C Tipi" },
      { val: "3+1", lbl: "2 katlı plan" },
    ],
  },

  catalog: {
    pdfUrl:"/catalogs/casa-oliva-2.pdf",
  },

  features: {
    title: "Proje Özellikleri",
    subtitle: "Casa Oliva 2 projesinin öne çıkan özelliklerini keşfedin.",
    items: [
      "Toplam 4000 m2’lik proje alanına sahiptir.",
      "Tüm villalar (3+1) Zemin kat ve birinci kat olmak üzere 2 katlıdır.",
      "Tüm villalarda yüzme havuzu, özel tasarlanmış peyzaj, çamaşır odası, cam kapaklı şömine, ayrı mutfak ve merkezi VRF iklendirme sistemi standart olarak sunulmaktadır.",
    ],
    ctaText: "Detaylı Bilgi Al",
    ctaHref: "#iletisim",
  },

  plans: {
    title: "Vaziyet Planı",
    image: "/images/projects/casa-oliva-2/plan/plan.jpg",
    // opsiyonel: floorPlans: [{ title, image }]
  },

  sliders: {
    dis: {
      title: "Proje Fotoğrafları",
      images: Array.from({ length: 16 }, (_, i) => `/images/projects/casa-oliva-2/proje/p${String(i + 1).padStart(2, "0")}.jpg`),
    },
    a: {
      title: "A Tipi İç Mimari",
      images: Array.from({ length: 21 }, (_, i) => `/images/projects/casa-oliva-2/a-tipi/a${String(i + 1).padStart(2, "0")}.jpg`),
    },
    c: {
      title: "C Tipi İç Mimari",
      images: Array.from({ length: 21 }, (_, i) => `/images/projects/casa-oliva-2/c-tipi/c${String(i + 1).padStart(2, "0")}.jpg`),
    },
  },
  footer: {
    footerBrandlogo: "/images/projects/casa-oliva-2/brand/ozyalcinlogo.jpg",
  }
};
