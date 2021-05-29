## Contents

- [Installation](#installation)
  - [Mushaf](#mushaf)
  - [Qari/Rawi](#qari--rawi)
- [Usage](#usage)
	 - [Surah & Chapter ](#surah--chapter)
	 -  [Ayah & Verse](#ayah--verse)
	 - [Juz](#juz)
	 - [Maqra & Section](#maqra--section)
	 - [Page](#page)
	 - [Raw](#raw)
- [Source & licensing](#raw)



## Installation

### Mushaf

```shell 
npm i mushaf
```

### Qari / Rawi

In order to use the mushaf, you must choose a Qari & Rawi. For example abu_amr/duri:

```shell 
npm i abu_amr
```

## Usage

```js
import mushaf from 'mushaf'
import abu_amr from 'abu_amr'

const quran = mushaf(abu_amr);
```

###  Surah & Chapter

```js
mushaf.surah() // Array of surahs/chapters
mushaf.surah(1) // Surah 1 data
mushaf.chapter(1) // Surah 1 data
```

###  Ayah & Verse
```js
mushaf.ayahs() // Array of total ayahs/verses of mushaf
mushaf.ayah(2,1) // Ayah 1 of surah 2
mushaf.verse(2,1) // Verse 1 of chapter 2
```
```js
// Example
mushaf.ayah(3)

// return
ملك يوم الدينِ
```

###  Juz
```js
mushaf.juzs() // Array of all 30 juz
mushaf.juz(1) // Juz 1
```

###  Maqra & Section
```js
mushaf.maqras() // All 8 maqras (1/8 of a juz) of the last selected juz (or 1 by default)
mushaf.maqra(2,1) // Maqra 1 of juz 2
mushaf.section(2,1) // Section 1 of juz 2
```
```js
// Example
mushaf.maqra(30,1)
// return
{
  verse: { text: 'عم يتساءلون', number: 5653 },
  page: { start: 582, end: 584 }
}
```

###  Page
```js
mushaf.page(1) // Array of page 1 lines
mushaf.line(2,1) // Line 1 of page 2
```
```js
// Example
mushaf.page(3)

// return
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

###  Raw
```js
mushaf.rawLine(1) // Raw line 1 of all pages of the mushaf (combined)
```

```js
// Example 
mushaf.line(1, 3)

// return
الحمد لله رب العلمين ١
```


## Source & licensing
Data is generated through [mushafDatasetGenerator](https://github.com/saqfish/mushafDatasetGenerator) project.
View the licensing on that project before deciding to use the data provided here.
