module.exports.register = function (Handlebars, options)  {

    var locale_labels = [
        {
            "code":"af",
            "fullname":"Afrikaans",
            "shortname":"Afrikaans",
            "nativename":"Afrikaans"
        },
        {
            "code":"af-ZA",
            "fullname":"Afrikaans (South Africa)",
            "shortname":"Afrikaans",
            "nativename":"Afrikaans (Suid Afrika)"
        },
        {
            "code":"am-ET",
            "fullname":"Amharic (Ethiopia)",
            "shortname":"Amharic",
            "nativename":"አማርኛ (ኢትዮጵያ)"
        },
        {
            "code":"ar",
            "fullname":"Arabic‎",
            "shortname":"Arabic",
            "nativename":"العربية‏"
        },
        {
            "code":"ar-AE",
            "fullname":"Arabic (U.A.E.)‎",
            "shortname":"Arabic",
            "nativename":"العربية (الإمارات العربية المتحدة)‏"
        },
        {
            "code":"ar-BH",
            "fullname":"Arabic (Bahrain)‎",
            "shortname":"Arabic",
            "nativename":"العربية (البحرين)‏"
        },
        {
            "code":"ar-DZ",
            "fullname":"Arabic (Algeria)‎",
            "shortname":"Arabic",
            "nativename":"العربية (الجزائر)‏"
        },
        {
            "code":"ar-EG",
            "fullname":"Arabic (Egypt)‎",
            "shortname":"Arabic",
            "nativename":"العربية (مصر)‏"
        },
        {
            "code":"ar-IQ",
            "fullname":"Arabic (Iraq)‎",
            "shortname":"Arabic",
            "nativename":"العربية (العراق)‏"
        },
        {
            "code":"ar-JO",
            "fullname":"Arabic (Jordan)‎",
            "shortname":"Arabic",
            "nativename":"العربية (الأردن)‏"
        },
        {
            "code":"ar-KW",
            "fullname":"Arabic (Kuwait)‎",
            "shortname":"Arabic",
            "nativename":"العربية (الكويت)‏"
        },
        {
            "code":"ar-LB",
            "fullname":"Arabic (Lebanon)‎",
            "shortname":"Arabic",
            "nativename":"العربية (لبنان)‏"
        },
        {
            "code":"ar-LY",
            "fullname":"Arabic (Libya)‎",
            "shortname":"Arabic",
            "nativename":"العربية (ليبيا)‏"
        },
        {
            "code":"ar-MA",
            "fullname":"Arabic (Morocco)‎",
            "shortname":"Arabic",
            "nativename":"العربية (المملكة المغربية)‏"
        },
        {
            "code":"arn-CL",
            "fullname":"Mapudungun (Chile)",
            "shortname":"Mapudungun",
            "nativename":"Mapudungun (Chile)"
        },
        {
            "code":"ar-OM",
            "fullname":"Arabic (Oman)‎",
            "shortname":"Arabic",
            "nativename":"العربية (عمان)‏"
        },
        {
            "code":"ar-QA",
            "fullname":"Arabic (Qatar)‎",
            "shortname":"Arabic",
            "nativename":"العربية (قطر)‏"
        },
        {
            "code":"ar-SA",
            "fullname":"Arabic (Saudi Arabia)‎",
            "shortname":"Arabic",
            "nativename":"العربية (المملكة العربية السعودية)‏"
        },
        {
            "code":"ar-SY",
            "fullname":"Arabic (Syria)‎",
            "shortname":"Arabic",
            "nativename":"العربية (سوريا)‏"
        },
        {
            "code":"ar-TN",
            "fullname":"Arabic (Tunisia)‎",
            "shortname":"Arabic",
            "nativename":"العربية (تونس)‏"
        },
        {
            "code":"ar-YE",
            "fullname":"Arabic (Yemen)‎",
            "shortname":"Arabic",
            "nativename":"العربية (اليمن)‏"
        },
        {
            "code":"as-IN",
            "fullname":"Assamese (India)",
            "shortname":"Assamese",
            "nativename":"অসমীয়া (ভাৰত)"
        },
        {
            "code":"az",
            "fullname":"Azeri",
            "shortname":"Azeri (Latin)",
            "nativename":"Azərbaycan­ılı"
        },
        {
            "code":"az-Cyrl-AZ",
            "fullname":"Azeri (Cyrillic, Azerbaijan)",
            "shortname":"Azeri (Cyrillic)",
            "nativename":"Азәрбајҹан (Азәрбајҹан)"
        },
        {
            "code":"az-Latn-AZ",
            "fullname":"Azeri (Latin, Azerbaijan)",
            "shortname":"Azeri (Latin)",
            "nativename":"Azərbaycan­ılı (Azərbaycanca)"
        },
        {
            "code":"ba-RU",
            "fullname":"Bashkir (Russia)",
            "shortname":"Bashkir",
            "nativename":"Башҡорт (Россия)"
        },
        {
            "code":"be",
            "fullname":"Belarusian",
            "shortname":"Belarusian",
            "nativename":"Беларускі"
        },
        {
            "code":"be-BY",
            "fullname":"Belarusian (Belarus)",
            "shortname":"Belarusian",
            "nativename":"Беларускі (Беларусь)"
        },
        {
            "code":"bg",
            "fullname":"Bulgarian",
            "shortname":"Bulgarian",
            "nativename":"български"
        },
        {
            "code":"bg-BG",
            "fullname":"Bulgarian (Bulgaria)",
            "shortname":"Bulgarian",
            "nativename":"български (България)"
        },
        {
            "code":"bn-BD",
            "fullname":"Bengali (Bangladesh)",
            "shortname":"Bengali",
            "nativename":"বাংলা (বাংলা)"
        },
        {
            "code":"bn-IN",
            "fullname":"Bengali (India)",
            "shortname":"Bengali",
            "nativename":"বাংলা (ভারত)"
        },
        {
            "code":"bo-CN",
            "fullname":"Tibetan (PRC)",
            "shortname":"Tibetan",
            "nativename":"བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)"
        },
        {
            "code":"br-FR",
            "fullname":"Breton (France)",
            "shortname":"Breton",
            "nativename":"brezhoneg (Frañs)"
        },
        {
            "code":"bs-Cyrl-BA",
            "fullname":"Bosnian (Cyrillic, Bosnia and Herzegovina)",
            "shortname":"Bosnian (Cyrillic)",
            "nativename":"босански (Босна и Херцеговина)"
        },
        {
            "code":"bs-Latn-BA",
            "fullname":"Bosnian (Latin, Bosnia and Herzegovina)",
            "shortname":"Bosnian (Latin)",
            "nativename":"bosanski (Bosna i Hercegovina)"
        },
        {
            "code":"ca",
            "fullname":"Catalan",
            "shortname":"Catalan",
            "nativename":"català"
        },
        {
            "code":"ca-ES",
            "fullname":"Catalan (Catalan)",
            "shortname":"Catalan",
            "nativename":"català (català)"
        },
        {
            "code":"co-FR",
            "fullname":"Corsican (France)",
            "shortname":"Corsican",
            "nativename":"Corsu (France)"
        },
        {
            "code":"cs",
            "fullname":"Czech",
            "shortname":"Czech",
            "nativename":"čeština"
        },
        {
            "code":"cs-CZ",
            "fullname":"Czech (Czech Republic)",
            "shortname":"Czech",
            "nativename":"čeština (Česká republika)"
        },
        {
            "code":"cy-GB",
            "fullname":"Welsh (United Kingdom)",
            "shortname":"Welsh",
            "nativename":"Cymraeg (y Deyrnas Unedig)"
        },
        {
            "code":"da",
            "fullname":"Danish",
            "shortname":"Danish",
            "nativename":"dansk"
        },
        {
            "code":"da-DK",
            "fullname":"Danish (Denmark)",
            "shortname":"Danish",
            "nativename":"dansk (Danmark)"
        },
        {
            "code":"de",
            "fullname":"German",
            "shortname":"German",
            "nativename":"Deutsch"
        },
        {
            "code":"de-AT",
            "fullname":"German (Austria)",
            "shortname":"German",
            "nativename":"Deutsch (Österreich)"
        },
        {
            "code":"de-CH",
            "fullname":"German (Switzerland)",
            "shortname":"German",
            "nativename":"Deutsch (Schweiz)"
        },
        {
            "code":"de-DE",
            "fullname":"German (Germany)",
            "shortname":"German",
            "nativename":"Deutsch (Deutschland)"
        },
        {
            "code":"de-LI",
            "fullname":"German (Liechtenstein)",
            "shortname":"German",
            "nativename":"Deutsch (Liechtenstein)"
        },
        {
            "code":"de-LU",
            "fullname":"German (Luxembourg)",
            "shortname":"German",
            "nativename":"Deutsch (Luxemburg)"
        },
        {
            "code":"div",
            "fullname":"Divehi‎",
            "shortname":"Divehi",
            "nativename":"ދިވެހިބަސް‏"
        },
        {
            "code":"div-MV",
            "fullname":"Divehi (Maldives)‎",
            "shortname":"Divehi",
            "nativename":"ދިވެހިބަސް (ދިވެހި ރާއްޖެ)‏"
        },
        {
            "code":"el",
            "fullname":"Greek",
            "shortname":"Greek",
            "nativename":"ελληνικά"
        },
        {
            "code":"el-GR",
            "fullname":"Greek (Greece)",
            "shortname":"Greek",
            "nativename":"ελληνικά (Ελλάδα)"
        },
        {
            "code":"en",
            "fullname":"English",
            "shortname":"English",
            "nativename":"English"
        },
        {
            "code":"en-029",
            "fullname":"English (Caribbean)",
            "shortname":"English",
            "nativename":"English (Caribbean)"
        },
        {
            "code":"en-AU",
            "fullname":"English (Australia)",
            "shortname":"English",
            "nativename":"English (Australia)"
        },
        {
            "code":"en-BZ",
            "fullname":"English (Belize)",
            "shortname":"English",
            "nativename":"English (Belize)"
        },
        {
            "code":"en-CA",
            "fullname":"English (Canada)",
            "shortname":"English",
            "nativename":"English (Canada)"
        },
        {
            "code":"en-GB",
            "fullname":"English (United Kingdom)",
            "shortname":"English",
            "nativename":"English (United Kingdom)"
        },
        {
            "code":"en-IE",
            "fullname":"English (Ireland)",
            "shortname":"English",
            "nativename":"English (Eire)"
        },
        {
            "code":"en-IN",
            "fullname":"English (India)",
            "shortname":"English",
            "nativename":"English (India)"
        },
        {
            "code":"en-JM",
            "fullname":"English (Jamaica)",
            "shortname":"English",
            "nativename":"English (Jamaica)"
        },
        {
            "code":"en-MY",
            "fullname":"English (Malaysia)",
            "shortname":"English",
            "nativename":"English (Malaysia)"
        },
        {
            "code":"en-NZ",
            "fullname":"English (New Zealand)",
            "shortname":"English",
            "nativename":"English (New Zealand)"
        },
        {
            "code":"en-PH",
            "fullname":"English (Republic of the Philippines)",
            "shortname":"English",
            "nativename":"English (Philippines)"
        },
        {
            "code":"en-SG",
            "fullname":"English (Singapore)",
            "shortname":"English",
            "nativename":"English (Singapore)"
        },
        {
            "code":"en-TT",
            "fullname":"English (Trinidad and Tobago)",
            "shortname":"English",
            "nativename":"English (Trinidad y Tobago)"
        },
        {
            "code":"en-US",
            "fullname":"English (United States)",
            "shortname":"English",
            "nativename":"English (United States)"
        },
        {
            "code":"en-ZA",
            "fullname":"English (South Africa)",
            "shortname":"English",
            "nativename":"English (South Africa)"
        },
        {
            "code":"en-ZW",
            "fullname":"English (Zimbabwe)",
            "shortname":"English",
            "nativename":"English (Zimbabwe)"
        },
        {
            "code":"es",
            "fullname":"Spanish",
            "shortname":"Spanish",
            "nativename":"español"
        },
        {
            "code":"es-AR",
            "fullname":"Spanish (Argentina)",
            "shortname":"Spanish",
            "nativename":"Español (Argentina)"
        },
        {
            "code":"es-BO",
            "fullname":"Spanish (Bolivia)",
            "shortname":"Spanish",
            "nativename":"Español (Bolivia)"
        },
        {
            "code":"es-CL",
            "fullname":"Spanish (Chile)",
            "shortname":"Spanish",
            "nativename":"Español (Chile)"
        },
        {
            "code":"es-CO",
            "fullname":"Spanish (Colombia)",
            "shortname":"Spanish",
            "nativename":"Español (Colombia)"
        },
        {
            "code":"es-CR",
            "fullname":"Spanish (Costa Rica)",
            "shortname":"Spanish",
            "nativename":"Español (Costa Rica)"
        },
        {
            "code":"es-DO",
            "fullname":"Spanish (Dominican Republic)",
            "shortname":"Spanish",
            "nativename":"Español (República Dominicana)"
        },
        {
            "code":"es-EC",
            "fullname":"Spanish (Ecuador)",
            "shortname":"Spanish",
            "nativename":"Español (Ecuador)"
        },
        {
            "code":"es-ES",
            "fullname":"Spanish (Spain)",
            "shortname":"Spanish",
            "nativename":"español (España)"
        },
        {
            "code":"es-GT",
            "fullname":"Spanish (Guatemala)",
            "shortname":"Spanish",
            "nativename":"Español (Guatemala)"
        },
        {
            "code":"es-HN",
            "fullname":"Spanish (Honduras)",
            "shortname":"Spanish",
            "nativename":"Español (Honduras)"
        },
        {
            "code":"es-MX",
            "fullname":"Spanish (Mexico)",
            "shortname":"Spanish",
            "nativename":"Español (México)"
        },
        {
            "code":"es-NI",
            "fullname":"Spanish (Nicaragua)",
            "shortname":"Spanish",
            "nativename":"Español (Nicaragua)"
        },
        {
            "code":"es-PA",
            "fullname":"Spanish (Panama)",
            "shortname":"Spanish",
            "nativename":"Español (Panamá)"
        },
        {
            "code":"es-PE",
            "fullname":"Spanish (Peru)",
            "shortname":"Spanish",
            "nativename":"Español (Perú)"
        },
        {
            "code":"es-PR",
            "fullname":"Spanish (Puerto Rico)",
            "shortname":"Spanish",
            "nativename":"Español (Puerto Rico)"
        },
        {
            "code":"es-PY",
            "fullname":"Spanish (Paraguay)",
            "shortname":"Spanish",
            "nativename":"Español (Paraguay)"
        },
        {
            "code":"es-SV",
            "fullname":"Spanish (El Salvador)",
            "shortname":"Spanish",
            "nativename":"Español (El Salvador)"
        },
        {
            "code":"es-US",
            "fullname":"Spanish (United States)",
            "shortname":"Spanish",
            "nativename":"Español (Estados Unidos)"
        },
        {
            "code":"es-UY",
            "fullname":"Spanish (Uruguay)",
            "shortname":"Spanish",
            "nativename":"Español (Uruguay)"
        },
        {
            "code":"es-VE",
            "fullname":"Spanish (Venezuela)",
            "shortname":"Spanish",
            "nativename":"Español (Republica Bolivariana de Venezuela)"
        },
        {
            "code":"et",
            "fullname":"Estonian",
            "shortname":"Estonian",
            "nativename":"eesti"
        },
        {
            "code":"et-EE",
            "fullname":"Estonian (Estonia)",
            "shortname":"Estonian",
            "nativename":"eesti (Eesti)"
        },
        {
            "code":"eu",
            "fullname":"Basque",
            "shortname":"Basque",
            "nativename":"euskara"
        },
        {
            "code":"eu-ES",
            "fullname":"Basque (Basque)",
            "shortname":"Basque",
            "nativename":"euskara (euskara)"
        },
        {
            "code":"fa",
            "fullname":"Persian‎",
            "shortname":"Persian",
            "nativename":"فارسى‏"
        },
        {
            "code":"fa-IR",
            "fullname":"Persian‎",
            "shortname":"Persian",
            "nativename":"فارسى (ايران)‏"
        },
        {
            "code":"fi",
            "fullname":"Finnish",
            "shortname":"Finnish",
            "nativename":"suomi"
        },
        {
            "code":"fi-FI",
            "fullname":"Finnish (Finland)",
            "shortname":"Finnish",
            "nativename":"suomi (Suomi)"
        },
        {
            "code":"fil-PH",
            "fullname":"Filipino (Philippines)",
            "shortname":"Filipino",
            "nativename":"Filipino (Pilipinas)"
        },
        {
            "code":"fo",
            "fullname":"Faroese",
            "shortname":"Faroese",
            "nativename":"føroyskt"
        },
        {
            "code":"fo-FO",
            "fullname":"Faroese (Faroe Islands)",
            "shortname":"Faroese",
            "nativename":"føroyskt (Føroyar)"
        },
        {
            "code":"fr",
            "fullname":"French",
            "shortname":"French",
            "nativename":"français"
        },
        {
            "code":"fr-BE",
            "fullname":"French (Belgium)",
            "shortname":"French",
            "nativename":"français (Belgique)"
        },
        {
            "code":"fr-CA",
            "fullname":"French (Canada)",
            "shortname":"French",
            "nativename":"français (Canada)"
        },
        {
            "code":"fr-CH",
            "fullname":"French (Switzerland)",
            "shortname":"French",
            "nativename":"français (Suisse)"
        },
        {
            "code":"fr-FR",
            "fullname":"French (France)",
            "shortname":"French",
            "nativename":"français (France)"
        },
        {
            "code":"fr-LU",
            "fullname":"French (Luxembourg)",
            "shortname":"French",
            "nativename":"français (Luxembourg)"
        },
        {
            "code":"fr-MC",
            "fullname":"French (Principality of Monaco)",
            "shortname":"French",
            "nativename":"français (Principauté de Monaco)"
        },
        {
            "code":"fy-NL",
            "fullname":"Frisian (Netherlands)",
            "shortname":"Frisian",
            "nativename":"Frysk (Nederlân)"
        },
        {
            "code":"ga-IE",
            "fullname":"Irish (Ireland)",
            "shortname":"Irish",
            "nativename":"Gaeilge (Éire)"
        },
        {
            "code":"gl",
            "fullname":"Galician",
            "shortname":"Galician",
            "nativename":"galego"
        },
        {
            "code":"gl-ES",
            "fullname":"Galician (Galician)",
            "shortname":"Galician",
            "nativename":"galego (galego)"
        },
        {
            "code":"gsw-FR",
            "fullname":"Alsatian (France)",
            "shortname":"Alsatian",
            "nativename":"Elsässisch (Frànkrisch)"
        },
        {
            "code":"gu",
            "fullname":"Gujarati",
            "shortname":"Gujarati",
            "nativename":"ગુજરાતી"
        },
        {
            "code":"gu-IN",
            "fullname":"Gujarati (India)",
            "shortname":"Gujarati",
            "nativename":"ગુજરાતી (ભારત)"
        },
        {
            "code":"ha-Latn-NG",
            "fullname":"Hausa (Latin, Nigeria)",
            "shortname":"Hausa (Latin)",
            "nativename":"Hausa (Nigeria)"
        },
        {
            "code":"he",
            "fullname":"Hebrew‎",
            "shortname":"Hebrew",
            "nativename":"עברית‏"
        },
        {
            "code":"he-IL",
            "fullname":"Hebrew (Israel)‎",
            "shortname":"Hebrew",
            "nativename":"עברית (ישראל)‏"
        },
        {
            "code":"hi",
            "fullname":"Hindi",
            "shortname":"Hindi",
            "nativename":"हिंदी"
        },
        {
            "code":"hi-IN",
            "fullname":"Hindi (India)",
            "shortname":"Hindi",
            "nativename":"हिंदी (भारत)"
        },
        {
            "code":"hr",
            "fullname":"Croatian",
            "shortname":"Croatian",
            "nativename":"hrvatski"
        },
        {
            "code":"hr-BA",
            "fullname":"Croatian (Latin, Bosnia and Herzegovina)",
            "shortname":"Croatian (Latin)",
            "nativename":"hrvatski (Bosna i Hercegovina)"
        },
        {
            "code":"hr-HR",
            "fullname":"Croatian (Croatia)",
            "shortname":"Croatian",
            "nativename":"hrvatski (Hrvatska)"
        },
        {
            "code":"hu",
            "fullname":"Hungarian",
            "shortname":"Hungarian",
            "nativename":"magyar"
        },
        {
            "code":"hu-HU",
            "fullname":"Hungarian (Hungary)",
            "shortname":"Hungarian",
            "nativename":"magyar (Magyarország)"
        },
        {
            "code":"hy",
            "fullname":"Armenian",
            "shortname":"Armenian",
            "nativename":"Հայերեն"
        },
        {
            "code":"hy-AM",
            "fullname":"Armenian (Armenia)",
            "shortname":"Armenian",
            "nativename":"Հայերեն (Հայաստան)"
        },
        {
            "code":"id",
            "fullname":"Indonesian",
            "shortname":"Indonesian",
            "nativename":"Bahasa Indonesia"
        },
        {
            "code":"id-ID",
            "fullname":"Indonesian (Indonesia)",
            "shortname":"Indonesian",
            "nativename":"Bahasa Indonesia (Indonesia)"
        },
        {
            "code":"ig-NG",
            "fullname":"Igbo (Nigeria)",
            "shortname":"Igbo",
            "nativename":"Igbo (Nigeria)"
        },
        {
            "code":"ii-CN",
            "fullname":"Yi (PRC)",
            "shortname":"Yi",
            "nativename":"ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)"
        },
        {
            "code":"is",
            "fullname":"Icelandic",
            "shortname":"Icelandic",
            "nativename":"íslenska"
        },
        {
            "code":"is-IS",
            "fullname":"Icelandic (Iceland)",
            "shortname":"Icelandic",
            "nativename":"íslenska (Ísland)"
        },
        {
            "code":"it",
            "fullname":"Italian",
            "shortname":"Italian",
            "nativename":"italiano"
        },
        {
            "code":"it-CH",
            "fullname":"Italian (Switzerland)",
            "shortname":"Italian",
            "nativename":"italiano (Svizzera)"
        },
        {
            "code":"it-IT",
            "fullname":"Italian (Italy)",
            "shortname":"Italian",
            "nativename":"italiano (Italia)"
        },
        {
            "code":"iu-Cans-CA",
            "fullname":"Inuktitut (Syllabics, Canada)",
            "shortname":"Inuktitut",
            "nativename":"ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕ)"
        },
        {
            "code":"iu-Latn-CA",
            "fullname":"Inuktitut (Latin, Canada)",
            "shortname":"Inuktitut (Latin)",
            "nativename":"Inuktitut (Kanatami) (kanata)"
        },
        {
            "code":"ja",
            "fullname":"Japanese",
            "shortname":"Japanese",
            "nativename":"日本語"
        },
        {
            "code":"ja-JP",
            "fullname":"Japanese (Japan)",
            "shortname":"Japanese",
            "nativename":"日本語 (日本)"
        },
        {
            "code":"ka",
            "fullname":"Georgian",
            "shortname":"Georgian",
            "nativename":"ქართული"
        },
        {
            "code":"ka-GE",
            "fullname":"Georgian (Georgia)",
            "shortname":"Georgian",
            "nativename":"ქართული (საქართველო)"
        },
        {
            "code":"kk",
            "fullname":"Kazakh",
            "shortname":"Kazakh",
            "nativename":"Қазащb"
        },
        {
            "code":"kk-KZ",
            "fullname":"Kazakh (Kazakhstan)",
            "shortname":"Kazakh",
            "nativename":"Қазақ (Қазақстан)"
        },
        {
            "code":"kl-GL",
            "fullname":"Greenlandic (Greenland)",
            "shortname":"Greenlandic",
            "nativename":"kalaallisut (Kalaallit Nunaat)"
        },
        {
            "code":"km-KH",
            "fullname":"Khmer (Cambodia)",
            "shortname":"Khmer",
            "nativename":"ខ្មែរ (កម្ពុជា)"
        },
        {
            "code":"kn",
            "fullname":"Kannada",
            "shortname":"Kannada",
            "nativename":"ಕನ್ನಡ"
        },
        {
            "code":"kn-IN",
            "fullname":"Kannada (India)",
            "shortname":"Kannada",
            "nativename":"ಕನ್ನಡ (ಭಾರತ)"
        },
        {
            "code":"ko",
            "fullname":"Korean",
            "shortname":"Korean",
            "nativename":"한국어"
        },
        {
            "code":"kok",
            "fullname":"Konkani",
            "shortname":"Konkani",
            "nativename":"कोंकणी"
        },
        {
            "code":"kok-IN",
            "fullname":"Konkani (India)",
            "shortname":"Konkani",
            "nativename":"कोंकणी (भारत)"
        },
        {
            "code":"ko-KR",
            "fullname":"Korean (Korea)",
            "shortname":"Korean",
            "nativename":"한국어 (대한민국)"
        },
        {
            "code":"ky",
            "fullname":"Kyrgyz",
            "shortname":"Kyrgyz",
            "nativename":"Кыргыз"
        },
        {
            "code":"ky-KG",
            "fullname":"Kyrgyz (Kyrgyzstan)",
            "shortname":"Kyrgyz",
            "nativename":"Кыргыз (Кыргызстан)"
        },
        {
            "code":"lb-LU",
            "fullname":"Luxembourgish (Luxembourg)",
            "shortname":"Luxembourgish",
            "nativename":"Lëtzebuergesch (Luxembourg)"
        },
        {
            "code":"lo-LA",
            "fullname":"Lao (Lao P.D.R.)",
            "shortname":"Lao",
            "nativename":"ລາວ (ສ.ປ.ປ. ລາວ)"
        },
        {
            "code":"lt",
            "fullname":"Lithuanian",
            "shortname":"Lithuanian",
            "nativename":"lietuvių"
        },
        {
            "code":"lt-LT",
            "fullname":"Lithuanian (Lithuania)",
            "shortname":"Lithuanian",
            "nativename":"lietuvių (Lietuva)"
        },
        {
            "code":"lv",
            "fullname":"Latvian",
            "shortname":"Latvian",
            "nativename":"latviešu"
        },
        {
            "code":"lv-LV",
            "fullname":"Latvian (Latvia)",
            "shortname":"Latvian",
            "nativename":"latviešu (Latvija)"
        },
        {
            "code":"mi-NZ",
            "fullname":"Maori (New Zealand)",
            "shortname":"Maori",
            "nativename":"Reo Māori (Aotearoa)"
        },
        {
            "code":"mk",
            "fullname":"Macedonian",
            "shortname":"Macedonian (FYROM)",
            "nativename":"македонски јазик"
        },
        {
            "code":"mk-MK",
            "fullname":"Macedonian (Former Yugoslav Republic of Macedonia)",
            "shortname":"Macedonian (FYROM)",
            "nativename":"македонски јазик (Македонија)"
        },
        {
            "code":"ml-IN",
            "fullname":"Malayalam (India)",
            "shortname":"Malayalam",
            "nativename":"മലയാളം (ഭാരതം)"
        },
        {
            "code":"mn",
            "fullname":"Mongolian",
            "shortname":"Mongolian (Cyrillic)",
            "nativename":"Монгол хэл"
        },
        {
            "code":"mn-MN",
            "fullname":"Mongolian (Cyrillic, Mongolia)",
            "shortname":"Mongolian (Cyrillic)",
            "nativename":"Монгол хэл (Монгол улс)"
        },
        {
            "code":"mn-Mong-CN",
            "fullname":"Mongolian (Traditional Mongolian, PRC)",
            "shortname":"Mongolian (Traditional Mongolian)",
            "nativename":"ᠮᠣᠩᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)"
        },
        {
            "code":"moh-CA",
            "fullname":"Mohawk (Mohawk)",
            "shortname":"Mohawk",
            "nativename":"Kanien'kéha (Canada)"
        },
        {
            "code":"mr",
            "fullname":"Marathi",
            "shortname":"Marathi",
            "nativename":"मराठी"
        },
        {
            "code":"mr-IN",
            "fullname":"Marathi (India)",
            "shortname":"Marathi",
            "nativename":"मराठी (भारत)"
        },
        {
            "code":"ms",
            "fullname":"Malay",
            "shortname":"Malay",
            "nativename":"Bahasa Malaysia"
        },
        {
            "code":"ms-BN",
            "fullname":"Malay (Brunei Darussalam)",
            "shortname":"Malay",
            "nativename":"Bahasa Malaysia (Brunei Darussalam)"
        },
        {
            "code":"ms-MY",
            "fullname":"Malay (Malaysia)",
            "shortname":"Malay",
            "nativename":"Bahasa Malaysia (Malaysia)"
        },
        {
            "code":"mt-MT",
            "fullname":"Maltese (Malta)",
            "shortname":"Maltese",
            "nativename":"Malti (Malta)"
        },
        {
            "code":"nb-NO",
            "fullname":"Norwegian, Bokmål (Norway)",
            "shortname":"Norwegian (Bokmål)",
            "nativename":"norsk, bokmål (Norge)"
        },
        {
            "code":"ne-NP",
            "fullname":"Nepali (Nepal)",
            "shortname":"Nepali",
            "nativename":"नेपाली (नेपाल)"
        },
        {
            "code":"nl",
            "fullname":"Dutch",
            "shortname":"Dutch",
            "nativename":"Nederlands"
        },
        {
            "code":"nl-BE",
            "fullname":"Dutch (Belgium)",
            "shortname":"Dutch",
            "nativename":"Nederlands (België)"
        },
        {
            "code":"nl-NL",
            "fullname":"Dutch (Netherlands)",
            "shortname":"Dutch",
            "nativename":"Nederlands (Nederland)"
        },
        {
            "code":"nn-NO",
            "fullname":"Norwegian, Nynorsk (Norway)",
            "shortname":"Norwegian (Nynorsk)",
            "nativename":"norsk, nynorsk (Noreg)"
        },
        {
            "code":"no",
            "fullname":"Norwegian",
            "shortname":"Norwegian (Bokmål)",
            "nativename":"norsk"
        },
        {
            "code":"nso-ZA",
            "fullname":"Sesotho sa Leboa (South Africa)",
            "shortname":"Sesotho sa Leboa",
            "nativename":"Sesotho sa Leboa (Afrika Borwa)"
        },
        {
            "code":"oc-FR",
            "fullname":"Occitan (France)",
            "shortname":"Occitan",
            "nativename":"Occitan (França)"
        },
        {
            "code":"or-IN",
            "fullname":"Oriya (India)",
            "shortname":"Oriya",
            "nativename":"ଓଡ଼ିଆ (ଭାରତ)"
        },
        {
            "code":"pa",
            "fullname":"Punjabi",
            "shortname":"Punjabi",
            "nativename":"ਪੰਜਾਬੀ"
        },
        {
            "code":"pa-IN",
            "fullname":"Punjabi (India)",
            "shortname":"Punjabi",
            "nativename":"ਪੰਜਾਬੀ (ਭਾਰਤ)"
        },
        {
            "code":"pl",
            "fullname":"Polish",
            "shortname":"Polish",
            "nativename":"polski"
        },
        {
            "code":"pl-PL",
            "fullname":"Polish (Poland)",
            "shortname":"Polish",
            "nativename":"polski (Polska)"
        },
        {
            "code":"prs-AF",
            "fullname":"Dari (Afghanistan)",
            "shortname":"Dari",
            "nativename":"درى (افغانستان)"
        },
        {
            "code":"ps-AF",
            "fullname":"Pashto (Afghanistan)",
            "shortname":"Pashto",
            "nativename":"پښتو (افغانستان)"
        },
        {
            "code":"pt",
            "fullname":"Portuguese",
            "shortname":"Portuguese",
            "nativename":"Português"
        },
        {
            "code":"pt-BR",
            "fullname":"Portuguese (Brazil)",
            "shortname":"Portuguese",
            "nativename":"Português (Brasil)"
        },
        {
            "code":"pt-PT",
            "fullname":"Portuguese (Portugal)",
            "shortname":"Portuguese",
            "nativename":"português (Portugal)"
        },
        {
            "code":"qut-GT",
            "fullname":"K'iche (Guatemala)",
            "shortname":"K'iche",
            "nativename":"K'iche (Guatemala)"
        },
        {
            "code":"quz-BO",
            "fullname":"Quechua (Bolivia)",
            "shortname":"Quechua",
            "nativename":"runasimi (Bolivia Suyu)"
        },
        {
            "code":"quz-EC",
            "fullname":"Quechua (Ecuador)",
            "shortname":"Quechua",
            "nativename":"runasimi (Ecuador Suyu)"
        },
        {
            "code":"quz-PE",
            "fullname":"Quechua (Peru)",
            "shortname":"Quechua",
            "nativename":"runasimi (Peru Suyu)"
        },
        {
            "code":"rm-CH",
            "fullname":"Romansh (Switzerland)",
            "shortname":"Romansh",
            "nativename":"Rumantsch (Svizra)"
        },
        {
            "code":"ro",
            "fullname":"Romanian",
            "shortname":"Romanian",
            "nativename":"română"
        },
        {
            "code":"ro-RO",
            "fullname":"Romanian (Romania)",
            "shortname":"Romanian",
            "nativename":"română (România)"
        },
        {
            "code":"ru",
            "fullname":"Russian",
            "shortname":"Russian",
            "nativename":"русский"
        },
        {
            "code":"ru-RU",
            "fullname":"Russian (Russia)",
            "shortname":"Russian",
            "nativename":"русский (Россия)"
        },
        {
            "code":"rw-RW",
            "fullname":"Kinyarwanda (Rwanda)",
            "shortname":"Kinyarwanda",
            "nativename":"Kinyarwanda (Rwanda)"
        },
        {
            "code":"sa",
            "fullname":"Sanskrit",
            "shortname":"Sanskrit",
            "nativename":"संस्कृत"
        },
        {
            "code":"sah-RU",
            "fullname":"Yakut (Russia)",
            "shortname":"Yakut",
            "nativename":"саха (Россия)"
        },
        {
            "code":"sa-IN",
            "fullname":"Sanskrit (India)",
            "shortname":"Sanskrit",
            "nativename":"संस्कृत (भारतम्)"
        },
        {
            "code":"se-FI",
            "fullname":"Sami, Northern (Finland)",
            "shortname":"Sami (Northern)",
            "nativename":"davvisámegiella (Suopma)"
        },
        {
            "code":"se-NO",
            "fullname":"Sami, Northern (Norway)",
            "shortname":"Sami (Northern)",
            "nativename":"davvisámegiella (Norga)"
        },
        {
            "code":"se-SE",
            "fullname":"Sami, Northern (Sweden)",
            "shortname":"Sami (Northern)",
            "nativename":"davvisámegiella (Ruoŧŧa)"
        },
        {
            "code":"si-LK",
            "fullname":"Sinhala (Sri Lanka)",
            "shortname":"Sinhala",
            "nativename":"සිංහ (ශ්‍රී ලංකා)"
        },
        {
            "code":"sk",
            "fullname":"Slovak",
            "shortname":"Slovak",
            "nativename":"slovenčina"
        },
        {
            "code":"sk-SK",
            "fullname":"Slovak (Slovakia)",
            "shortname":"Slovak",
            "nativename":"slovenčina (Slovenská republika)"
        },
        {
            "code":"sl",
            "fullname":"Slovenian",
            "shortname":"Slovenian",
            "nativename":"slovenski"
        },
        {
            "code":"sl-SI",
            "fullname":"Slovenian (Slovenia)",
            "shortname":"Slovenian",
            "nativename":"slovenski (Slovenija)"
        },
        {
            "code":"sma-NO",
            "fullname":"Sami, Southern (Norway)",
            "shortname":"Sami (Southern)",
            "nativename":"åarjelsaemiengiele (Nöörje)"
        },
        {
            "code":"sma-SE",
            "fullname":"Sami, Southern (Sweden)",
            "shortname":"Sami (Southern)",
            "nativename":"åarjelsaemiengiele (Sveerje)"
        },
        {
            "code":"smj-NO",
            "fullname":"Sami, Lule (Norway)",
            "shortname":"Sami (Lule)",
            "nativename":"julevusámegiella (Vuodna)"
        },
        {
            "code":"smj-SE",
            "fullname":"Sami, Lule (Sweden)",
            "shortname":"Sami (Lule)",
            "nativename":"julevusámegiella (Svierik)"
        },
        {
            "code":"smn-FI",
            "fullname":"Sami, Inari (Finland)",
            "shortname":"Sami (Inari)",
            "nativename":"sämikielâ (Suomâ)"
        },
        {
            "code":"sms-FI",
            "fullname":"Sami, Skolt (Finland)",
            "shortname":"Sami (Skolt)",
            "nativename":"sääm´ǩiõll (Lää´ddjânnam)"
        },
        {
            "code":"sq",
            "fullname":"Albanian",
            "shortname":"Albanian",
            "nativename":"shqipe"
        },
        {
            "code":"sq-AL",
            "fullname":"Albanian (Albania)",
            "shortname":"Albanian",
            "nativename":"shqipe (Shqipëria)"
        },
        {
            "code":"sr",
            "fullname":"Serbian",
            "shortname":"Serbian (Latin)",
            "nativename":"srpski"
        },
        {
            "code":"sr-Cyrl-BA",
            "fullname":"Serbian (Cyrillic, Bosnia and Herzegovina)",
            "shortname":"Serbian (Cyrillic)",
            "nativename":"српски (Босна и Херцеговина)"
        },
        {
            "code":"sr-Cyrl-SP",
            "fullname":"Serbian (Cyrillic, Serbia)",
            "shortname":"Serbian (Cyrillic)",
            "nativename":"српски (Србија и Црна Гора)"
        },
        {
            "code":"sr-Latn-BA",
            "fullname":"Serbian (Latin, Bosnia and Herzegovina)",
            "shortname":"Serbian (Latin)",
            "nativename":"srpski (Bosna i Hercegovina)"
        },
        {
            "code":"sr-Latn-SP",
            "fullname":"Serbian (Latin, Serbia)",
            "shortname":"Serbian (Latin)",
            "nativename":"srpski (Srbija i Crna Gora)"
        },
        {
            "code":"sr-ME",
            "fullname":"Montenegrin",
            "shortname":"Montenegrin",
            "nativename":"Montenegrin"
        },
        {
            "code":"sv",
            "fullname":"Swedish",
            "shortname":"Swedish",
            "nativename":"svenska"
        },
        {
            "code":"sv-FI",
            "fullname":"Swedish (Finland)",
            "shortname":"Swedish",
            "nativename":"svenska (Finland)"
        },
        {
            "code":"sv-SE",
            "fullname":"Swedish (Sweden)",
            "shortname":"Swedish",
            "nativename":"svenska (Sverige)"
        },
        {
            "code":"sw",
            "fullname":"Kiswahili",
            "shortname":"Kiswahili",
            "nativename":"Kiswahili"
        },
        {
            "code":"sw-KE",
            "fullname":"Kiswahili (Kenya)",
            "shortname":"Kiswahili",
            "nativename":"Kiswahili (Kenya)"
        },
        {
            "code":"syr",
            "fullname":"Syriac‎",
            "shortname":"Syriac",
            "nativename":"ܣܘܪܝܝܐ‏"
        },
        {
            "code":"syr-SY",
            "fullname":"Syriac (Syria)‎",
            "shortname":"Syriac",
            "nativename":"ܣܘܪܝܝܐ (سوريا)‏"
        },
        {
            "code":"ta",
            "fullname":"Tamil",
            "shortname":"Tamil",
            "nativename":"தமிழ்"
        },
        {
            "code":"ta-IN",
            "fullname":"Tamil (India)",
            "shortname":"Tamil",
            "nativename":"தமிழ் (இந்தியா)"
        },
        {
            "code":"te",
            "fullname":"Telugu",
            "shortname":"Telugu",
            "nativename":"తెలుగు"
        },
        {
            "code":"te-IN",
            "fullname":"Telugu (India)",
            "shortname":"Telugu",
            "nativename":"తెలుగు (భారత దేశం)"
        },
        {
            "code":"tg-Cyrl-TJ",
            "fullname":"Tajik (Cyrillic, Tajikistan)",
            "shortname":"Tajik (Cyrillic)",
            "nativename":"Тоҷикӣ (Тоҷикистон)"
        },
        {
            "code":"th",
            "fullname":"Thai",
            "shortname":"Thai",
            "nativename":"ไทย"
        },
        {
            "code":"th-TH",
            "fullname":"Thai (Thailand)",
            "shortname":"Thai",
            "nativename":"ไทย (ไทย)"
        },
        {
            "code":"tk-TM",
            "fullname":"Turkmen (Turkmenistan)",
            "shortname":"Turkmen",
            "nativename":"türkmençe (Türkmenistan)"
        },
        {
            "code":"tn-ZA",
            "fullname":"Setswana (South Africa)",
            "shortname":"Setswana",
            "nativename":"Setswana (Aforika Borwa)"
        },
        {
            "code":"tr",
            "fullname":"Turkish",
            "shortname":"Turkish",
            "nativename":"Türkçe"
        },
        {
            "code":"tr-TR",
            "fullname":"Turkish (Turkey)",
            "shortname":"Turkish",
            "nativename":"Türkçe (Türkiye)"
        },
        {
            "code":"tt",
            "fullname":"Tatar",
            "shortname":"Tatar",
            "nativename":"Татар"
        },
        {
            "code":"tt-RU",
            "fullname":"Tatar (Russia)",
            "shortname":"Tatar",
            "nativename":"Татар (Россия)"
        },
        {
            "code":"tzm-Latn-DZ",
            "fullname":"Tamazight (Latin, Algeria)",
            "shortname":"Tamazight (Latin)",
            "nativename":"Tamazight (Djazaïr)"
        },
        {
            "code":"ug-CN",
            "fullname":"Uighur (PRC)",
            "shortname":"Uighur",
            "nativename":"ئۇيغۇر يېزىقى (جۇڭخۇا خەلق جۇمھۇرىيىتى)"
        },
        {
            "code":"uk",
            "fullname":"Ukrainian",
            "shortname":"Ukrainian",
            "nativename":"україньска"
        },
        {
            "code":"uk-UA",
            "fullname":"Ukrainian (Ukraine)",
            "shortname":"Ukrainian",
            "nativename":"україньска (Україна)"
        },
        {
            "code":"ur",
            "fullname":"Urdu‎",
            "shortname":"Urdu",
            "nativename":"اُردو‏"
        },
        {
            "code":"ur-PK",
            "fullname":"Urdu (Islamic Republic of Pakistan)‎",
            "shortname":"Urdu",
            "nativename":"اُردو (پاکستان)‏"
        },
        {
            "code":"uz",
            "fullname":"Uzbek",
            "shortname":"Uzbek (Latin)",
            "nativename":"U'zbek"
        },
        {
            "code":"uz-Cyrl-UZ",
            "fullname":"Uzbek (Cyrillic, Uzbekistan)",
            "shortname":"Uzbek (Cyrillic)",
            "nativename":"Ўзбек (Ўзбекистон)"
        },
        {
            "code":"uz-Latn-UZ",
            "fullname":"Uzbek (Latin, Uzbekistan)",
            "shortname":"Uzbek (Latin)",
            "nativename":"U'zbek (U'zbekiston Respublikasi)"
        },
        {
            "code":"vi",
            "fullname":"Vietnamese",
            "shortname":"Vietnamese",
            "nativename":"Tiếng Việt"
        },
        {
            "code":"vi-VN",
            "fullname":"Vietnamese (Vietnam)",
            "shortname":"Vietnamese",
            "nativename":"Tiếng Việt (Việt Nam)"
        },
        {
            "code":"wee-DE",
            "fullname":"Lower Sorbian (Germany)",
            "shortname":"Lower Sorbian",
            "nativename":"dolnoserbšćina (Nimska)"
        },
        {
            "code":"wen-DE",
            "fullname":"Upper Sorbian (Germany)",
            "shortname":"Upper Sorbian",
            "nativename":"hornjoserbšćina (Němska)"
        },
        {
            "code":"wo-SN",
            "fullname":"Wolof (Senegal)",
            "shortname":"Wolof",
            "nativename":"Wolof (Sénégal)"
        },
        {
            "code":"xh-ZA",
            "fullname":"isiXhosa (South Africa)",
            "shortname":"isiXhosa",
            "nativename":"isiXhosa (uMzantsi Afrika)"
        },
        {
            "code":"yo-NG",
            "fullname":"Yoruba (Nigeria)",
            "shortname":"Yoruba",
            "nativename":"Yoruba (Nigeria)"
        },
        {
            "code":"zh-CN",
            "fullname":"Chinese (People's Republic of China)",
            "shortname":"Chinese",
            "nativename":"中文(中华人民共和国)"
        },
        {
            "code":"zh-Hans",
            "fullname":"Chinese (Simplified)",
            "shortname":"Chinese",
            "nativename":"中文(简体)"
        },
        {
            "code":"zh-Hant",
            "fullname":"Chinese (Traditional)",
            "shortname":"Chinese",
            "nativename":"中文(繁體)"
        },
        {
            "code":"zh-HK",
            "fullname":"Chinese (Hong Kong S.A.R.)",
            "shortname":"Chinese",
            "nativename":"中文(香港特别行政區)"
        },
        {
            "code":"zh-MO",
            "fullname":"Chinese (Macao S.A.R.)",
            "shortname":"Chinese",
            "nativename":"中文(澳門特别行政區)"
        },
        {
            "code":"zh-SG",
            "fullname":"Chinese (Singapore)",
            "shortname":"Chinese",
            "nativename":"中文(新加坡)"
        },
        {
            "code":"zh-TW",
            "fullname":"Chinese (Taiwan)",
            "shortname":"Chinese",
            "nativename":"中文(台灣)"
        },
        {
            "code":"zu-ZA",
            "fullname":"isiZulu (South Africa)",
            "shortname":"isiZulu",
            "nativename":"isiZulu (iNingizimu Afrika)"
        }
    ];

    function find_locale_info(path)
    {
        var code = path.replace(/.+?\/grid.locale-(.+?)\.js/, '$1'),
            i;

        for (i = 0; i < locale_labels.length; i++)
        {
            if (locale_labels[i].code === code)
            {
                return {label: locale_labels[i].fullname, helptext: locale_labels[i].nativename};
            }
        }
        return {label: code, helptext: "Unknown language code"};
    }

    Handlebars.registerHelper('locale_list', function (locales, block)  {
        var output = '',
            i,
            locale_data = [];

        for (i = 0; i < locales.length; i++)
        {
            locale_data.push({path: locales[i], info: find_locale_info(locales[i])});
        }
        locale_data.sort(function(a, b)
        {
            return a.info.label.localeCompare(b.info.label);
        })
        for (i = 0; i < locale_data.length; i++)
        {
            output += block.fn(locale_data[i]);
        }
        return output;
    });
};
