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
        'TRÂN TRỌNG KÍNH MỜI QUÝ KHÁCH DÀNH THỜI GIAN<br /> ĐẾN THAM DỰ LỄ THÀNH HÔN CỦA',
      "invitation.groom_name": 'Mỹ Uyên',
      "invitation.bride_name": 'Tử Quyền',
      "invitation.timeLabel": 'VÀO LÚC <strong>18H00</strong>',
      "invitation.weekday": 'THỨ BẢY',
      "invitation.lunar_date": "(Nhằm ngày 3 tháng 7 năm Bính Ngọ)",
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

      "rsvp.title": "Xác nhận tham dự",
      "rsvp.subtitle":
        'KHÁCH MỜI VUI LÒNG XÁC NHẬN THAM DỰ TRƯỚC NGÀY 01/08.',
      "rsvp.namePlaceholder": 'Tên khách mời',
      "rsvp.guests_number": 'Số người đi kèm',
      "rsvp.confirmRelatedSubtitle": 'BẠN LÀ BẠN BÈ, ĐỒNG NGHIỆP HAY NGƯỜI THÂN CỦA...?',
      "rsvp.confirmSubtitle":
        'BẠN SẼ ĐẾN THAM GIA TIỆC CƯỚI ĐỈNH NÓC, KỊCH TRẦN, <br>BAY PHẤP PHỚI CỦA CHÚNG MÌNH CHỨ?',
      "rsvp.yes": 'Sẽ tham dự',
      "rsvp.no": 'Không tham dự',
      "rsvp.guestsSubtitle": 'BẠN CÓ “TỆP ĐÍNH KÈM” CÙNG TỚI TIỆC CƯỚI KHÔNG? <br />',
      "rsvp.alone": 'Chỉ có tôi và sự cô đơn',
      "rsvp.child": 'Tôi đi cùng trẻ nhỏ',
      "rsvp.related_subtitle": "Quý khách có yêu cầu đặc biệt về thức ăn không?",
      "rsvp.normal": "Ăn mặn",
      "rsvp.vegetarian": "Ăn chay",
      "rsvp.messageSubtitle": 'GỬI MỘT VÀI LỜI IU THƯƠNG DÀNH CHO CHÚNG MÌNH NHA ^^',
      "rsvp.messagePlaceholder": 'QUÝ KHÁCH CÓ LỜI CHỨC HAY NHẮN GỬI ĐẾN CÔ DÂU VÀ CHÚ RỂ KHÔNG?',
      "rsvp.submit": 'Xác nhận',

      "yenstudio.textMain": 'HẸN GẶP LẠI BẠN!'
    },
    zh: {
      "invitation.message": '誠摯敬邀各位貴賓撥冗蒞臨參加我們的結婚典禮。',
      "invitation.groom_name": '阮春美媛',
      "invitation.bride_name": '李子權',
      "invitation.timeLabel": '時間 ：<strong>18:00</strong>',
      "invitation.weekday": '星期六',
      "invitation.date": "2026年08月15日",
      "invitation.lunar_date": "（農曆丙午年七月初三）",
      "invitation.venueAddress":'蒞臨參加婚宴，與我們共同分享喜悅在: 萬豪酒店, 二樓',
      "invitation.mapButton": '點擊查看地圖',
      "timeline.item1": '迎賓',
      "timeline.item2": '儀式',
      "timeline.item3": '開宴',
      "timeline.item4": '表演',
      "timeline.item5": '拋花',
      "timeline.subtext":
        '为了确保婚礼流程顺利进行，并获得最佳拍摄光线，请亲爱的来宾准时出席婚礼。',
      "timeline.dresscodeSubtext":
        '如果各位嘉宾能穿上以下色系的服装，<br>婚礼将会更加完美：',
      "album.subtext": '一起来看看我们的照片吧！',
 
      "rsvp.title": "出席確認",
      "rsvp.subtitle":
        '敬請賓客於2026年08月01日前回覆是否出席',
      "rsvp.namePlaceholder": '您的姓名',
      "rsvp.guests_number": '同行人數',
      "rsvp.confirmRelatedSubtitle": '您是以下哪位的新朋好友或家人？',
      "rsvp.uyen": "李子權",
      "rsvp.quyen": "阮春美媛 ",
      "rsvp.confirmSubtitle": '您会来参加我们的超精彩婚礼派对吗？ 当然会！！！',
      "rsvp.yes": '出席',
      "rsvp.no": '不出席',
      "rsvp.guestsSubtitle": '您会携带同行宾客一起出席婚礼吗？',
      "rsvp.alone": '只有我一个人',
      "rsvp.child": '我会带小朋友一起',
      "rsvp.related_subtitle": "是否有特別餐飲需求？",
      "rsvp.normal": "葷食",
      "rsvp.vegetarian": "素食",
      "rsvp.messageSubtitle": '请给我们留下一些祝福的话吧 ^^',
      "rsvp.messagePlaceholder": '是否有祝福或留言想送給新娘與新郎？',
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
