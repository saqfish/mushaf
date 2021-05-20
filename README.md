## Usage
`const { mushaf, mushafs } = require("mushaf");`

```js
mushaf.surah() \\ Array of surahs/chapters
mushaf.surah(1) \\ Surah 1 data
mushaf.ayahs() \\ Array of ayas/verses
mushaf.ayah(1) \\ Ayah 1 of last selected surah (or 1 by default)
mushaf.juzs() \\ Array of all 30 juz
mushaf.juz(1) \\ Juz 1
mushaf.maqras() \\ All 8 maqras (1/8 of a juz) of the last selected juz (or 1 by default)
mushaf.maqra(2,1) \\ Maqra 1 of juz 2
mushaf.page(1) \\ Array of page 1 lines
mushaf.line(2,1) \\ Line 1 of page 2
mushaf.rawLine(1) \\ Line 1 of all pages of the mushaf (combined)
```

## Sample data
```js
// Surah
mushaf.surah(1)
{
	"title": "سُورَةُ الفَلَقِ",
	"numChapter": 113,
	"numVerses": 5,
	"verses": [
		"قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ",
		"مِن شَرِّ مَا خَلَقَ",
		"وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
		"وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلۡعُقَدِ",
		"وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"
	]
}
```

```js
// Maqra
mushaf.maqra(30,1)
{
  verse: { text: 'عم يتساءلون', number: 5653 },
  page: { start: 582, end: 584 }
}
```

```js
// Verse
mushaf.ayah(3)
ملك يوم الدينِ
```

```js
// Page
mushaf.page(3)
[
  'إن الذين كفروا سواء عليهم ءانذرتهم أم لم تنذرهم ',
  'لا يؤمنون ٥ ختم الله على قلوبهم وعلى سمعهم وعلى ',
  'أبصرهم غشوة ولهم عذاب عظيم ٦ ومن الناس ',
  'من يقول ءامنا بالله وباليوم الأخر وما هم بمؤمنين ٧ ',
  'يخدعون الله والذين ءامنوا وما يخدعون إلا أنفسهم ',
  'وما يشعرون ٨ في قلوبهم مرض فزادهم الله مرضا ',
  'ولهم عذاب أليم بما كانوا يكذبون ٩ وإذا قيل لهم ',
  'لا تفسدوا في الأرض قالوا إنما نحن مصلحون ١٠ ألا إنهم ',
  'هم المفسدون ولكن لا يشعرون ١١ وإذا قيل لهم ',
  'ءامنوا كما ءامن الناس قالوا أنؤمن كما ءامن السفهاء ',
  'الا إنهم هم السفهاء ولكن لا يعلمون ١٢ وإذا لقوا ',
  'الذين ءامنوا قالوا ءامنا وإذا خلوا إلى شيطينهم قالوا إنا ',
  'معكم إنما نحن مستهزءون ١٣ الله يستهزي بهم ويمدهم ',
  'في طغينهم يعمهون ١٤ أولئك الذين اشتروا الضللة ',
  'بالهدى فما ربحت تجرتهم وما كانوا مهتدين ١٥ '
]
```

```js
// Line 
mushaf.line(1, 3)
الحمد لله رب العلمين ١
```

## Data set
Data is generated through [mushafDatasetGenerator](https://github.com/saqfish/mushafDatasetGenerator) project.
View the licensing on that project before deciding to use the data provided here.
