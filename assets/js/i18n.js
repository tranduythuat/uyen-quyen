(function () {
  "use strict";

  var STORAGE_KEY = "uyen-quyen-lang";
  var SUPPORTED_LANGS = ["vi", "zh"];
  var DEFAULT_LANG = "vi";

  /* =========================================================
   * Translation dictionary
   * Keys map to data-i18n / data-i18n-placeholder attributes.
   * Values can contain simple HTML (span/br/strong) since some
   * source strings already include inline markup.
   * ========================================================= */
  var translations = {
    vi: {
      "invitation.message":
        'TRÂN TRỌNG KÍNH MỜI <span>ANH/CHỊ/BẠN</span><br />ĐẾN DỰ BỮA CƠM THÂN MẬT MỪNG LỄ THÀNH HÔN CỦA',
      "invitation.groom_name": 'Mỹ Uyên',
      "invitation.bride_name": 'Tử Quyền',
      "invitation.timeLabel": 'VÀO LÚC <strong>17H30</strong>',
      "invitation.weekday": 'THỨ BẢY',
      "invitation.lunar_date": "(nhằm ngày 3 tháng 7 âm lịch)",
      "invitation.venueAddress":
        'Grand Ballroom, Tầng 2, 39 Lê Duẩn, Phường Sài Gòn, Thành phố Hồ Chí Minh',
      "invitation.mapButton": 'CLICK ĐỂ XEM BẢN ĐỒ',

      "timeline.item1": 'Đón khách',
      "timeline.item2": 'Làm lễ',
      "timeline.item3": 'Khai tiệc',
      "timeline.item4": 'Âm nhạc',
      "timeline.item5": 'Tung hoa',
      "timeline.subtext":
        '<span>Lưu ý:</span> Khách iu vui lòng đến <span>đúng giờ</span> để đảm bảo chương trình <br>và ánh sáng đẹp nhất cho Lễ Cưới',
      "timeline.dresscodeSubtext":
        'BUỔI TIỆC SẼ TUYỆT VỜI HƠN KHI KHÁCH MỜI <br>CÓ THỂ MANG TRANG PHỤC VỚI NHỮNG TONE MÀU DƯỚI ĐÂY:',

      "album.subtext": 'CÙNG XEM BST CỦA CHÚNG MÌNH NHÉ!',

      "rsvp.subtitle":
        'HÃY GIÀNH CHÚT THỜI GIAN XÁC NHẬN THAM DỰ GIÚP <br>THÀNH UYÊN VÀ QUYỀN NHÉ!',
      "rsvp.namePlaceholder": 'Tên của bạn',
      "rsvp.phonePlaceholder": 'Số điện thoại',
      "rsvp.confirmRelatedSubtitle": 'BẠN LÀ BẠN BÈ, ĐỒNG NGHIỆP HAY NGƯỜI THÂN CỦA...?',
      "rsvp.both": 'Cả hai',
      "rsvp.confirmSubtitle":
        'BẠN SẼ ĐẾN THAM GIA TIỆC CƯỚI ĐỈNH NÓC, KỊCH TRẦN, <br>BAY PHẤP PHỚI CỦA CHÚNG MÌNH CHỨ?',
      "rsvp.yes": 'Chắc chắn rùi !!!',
      "rsvp.no": 'Rất tiếc hong tham gia được :(',
      "rsvp.guestsSubtitle": 'BẠN CÓ “TỆP ĐÍNH KÈM” CÙNG TỚI TIỆC CƯỚI KHÔNG? <br />',
      "rsvp.alone": 'Chỉ có tôi và sự cô đơn',
      "rsvp.child": 'Tôi đi cùng trẻ nhỏ',
      "rsvp.related_subtitle": "BẠN CÓ LƯU Ý GÌ ĐẶC BIỆT VỀ THỨC ĂN KHÔNG?",
      "rsvp.normal": "Tôi bình thường",
      "rsvp.vegetarian": "Tôi ăn chay",
      "rsvp.messageSubtitle": 'GỬI MỘT VÀI LỜI IU THƯƠNG DÀNH CHO CHÚNG MÌNH NHA ^^',
      "rsvp.messagePlaceholder": 'Viết lời chúc...',
      "rsvp.submit": 'Xác nhận',

      "yenstudio.textMain": 'HẸN GẶP LẠI BẠN!'
    },
    zh: {
      "invitation.message": '謹訂於茲，敬告諸位親友我們愛子愛女之結婚典禮',
      "invitation.groom_name": '阮春美媛',
      "invitation.bride_name": '李子權',
      "invitation.timeLabel": '时间 <strong>下午17:30</strong>',
      "invitation.weekday": '星期六',
      "invitation.lunar_date": "（农历七月初三）",
      "invitation.venueAddress":'蒞臨參加婚宴，與我們共同分享喜悅在: 萬豪酒店, 二樓',
      "invitation.mapButton": '点击查看地图',
      "timeline.item1": '迎宾',
      "timeline.item2": '婚礼仪式',
      "timeline.item3": '开席',
      "timeline.item4": '音乐表演',
      "timeline.item5": '抛花仪式',
      "timeline.subtext":
        '为了确保婚礼流程顺利进行，并获得最佳拍摄光线，请亲爱的来宾准时出席婚礼。',
      "timeline.dresscodeSubtext":
        '如果各位嘉宾能穿上以下色系的服装，<br>婚礼将会更加完美：',
 
      "album.subtext": '一起来看看我们的照片吧！',
 
      "rsvp.subtitle":
        '请花一点时间帮 Mỹ Uyên 和 Tử Quyền 确认是否出席，谢谢！',
      "rsvp.namePlaceholder": '您的姓名',
      "rsvp.phonePlaceholder": '手机号码',
      "rsvp.confirmRelatedSubtitle": '您是以下哪位的新朋好友或家人？',
      "rsvp.uyen": "李子權",
      "rsvp.quyen": "阮春美媛 ",
      "rsvp.both": '两位都是',
      "rsvp.confirmSubtitle": '您会来参加我们的超精彩婚礼派对吗？ 当然会！！！',
      "rsvp.yes": '很遗憾',
      "rsvp.no": '无法参加 :(',
      "rsvp.guestsSubtitle": '您会携带同行宾客一起出席婚礼吗？',
      "rsvp.alone": '只有我一个人',
      "rsvp.child": '我会带小朋友一起',
      "rsvp.related_subtitle": "您对食物有什么特别的要求吗？",
      "rsvp.normal": "我正常饮食",
      "rsvp.vegetarian": "我吃素",
      "rsvp.messageSubtitle": '请给我们留下一些祝福的话吧 ^^',
      "rsvp.messagePlaceholder": '写下您的祝福...',
      "rsvp.submit": '确认',
 
      "yenstudio.textMain": '期待与您再相见！'
    }
  };

  var switcherLabels = { vi: "简体中文", zh: "Tiếng Việt" };

  function isSupported(lang) {
    return SUPPORTED_LANGS.indexOf(lang) !== -1;
  }

  function getLangFromURL() {
    var params = new URLSearchParams(window.location.search);
    var lang = params.get("lang");
    return isSupported(lang) ? lang : null;
  }

  function getSavedLang() {
    try {
      var lang = window.localStorage.getItem(STORAGE_KEY);
      return isSupported(lang) ? lang : null;
    } catch (e) {
      return null;
    }
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      /* localStorage might be unavailable, ignore */
    }
  }

  function updateURL(lang) {
    try {
      var url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url.toString());
    } catch (e) {
      /* ignore for very old browsers */
    }
  }

  function applyTranslations(lang) {
    var dict = translations[lang] || translations[DEFAULT_LANG];

    document.documentElement.setAttribute("lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) {
        el.innerHTML = dict[key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) {
        el.setAttribute("placeholder", dict[key]);
      }
    });

    var switcher = document.getElementById("langSwitcher");
    if (switcher) {
      switcher.textContent = switcherLabels[lang] || switcherLabels[DEFAULT_LANG];
      switcher.setAttribute("data-current-lang", lang);
    }
  }

  function hidePopup() {
    var overlay = document.getElementById("langOverlay");
    if (overlay) {
      overlay.classList.remove("is-visible");
    }
  }

  function showPopup() {
    var overlay = document.getElementById("langOverlay");
    if (overlay) {
      overlay.classList.add("is-visible");
    }
  }

  function selectLang(lang, options) {
    if (!isSupported(lang)) return;
    var opts = options || {};

    applyTranslations(lang);
    saveLang(lang);
    updateURL(lang);
    hidePopup();

    if (!opts.silent) {
      document.dispatchEvent(
        new CustomEvent("langchange", { detail: { lang: lang } })
      );
    }
  }

  function initPopupButtons() {
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectLang(btn.getAttribute("data-lang"));
      });
    });
  }

  function initSwitcher() {
    var switcher = document.getElementById("langSwitcher");
    if (!switcher) return;
    switcher.addEventListener("click", function () {
      var current = switcher.getAttribute("data-current-lang") || DEFAULT_LANG;
      var next = current === "vi" ? "zh" : "vi";
      selectLang(next);
    });
  }

  function init() {
    initPopupButtons();
    initSwitcher();

    var urlLang = getLangFromURL();
    var savedLang = getSavedLang();

    if (urlLang) {
      // Explicit lang in the URL always wins, no popup needed.
      applyTranslations(urlLang);
      saveLang(urlLang);
    } else if (savedLang) {
      // Returning visitor: reuse saved choice and reflect it in the URL.
      applyTranslations(savedLang);
      updateURL(savedLang);
    } else {
      // First-time visitor: show default language while they choose.
      applyTranslations(DEFAULT_LANG);
      showPopup();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
