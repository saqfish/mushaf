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
	 - [Useful methods](#useful-methods)

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
mushaf.surah(surah) // Surah n data
mushaf.chapter(surah) // Surah n data
```

```js
// Example
mushaf.surah(113)

// return
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

###  Ayah & Verse
```js
mushaf.ayahs() // Array of total ayahs/verses of mushaf
mushaf.ayah(surah,ayah) // Ayah n of surah n
mushaf.verse(chapter,verse) // Verse n of chapter n
```
```js
// Example
mushaf.ayah(1, 3)

// return
ملك يوم الدينِ
```

###  Juz
```js
mushaf.juzs() // Array of all 30 juz
mushaf.juz(juz) // Juz n
```

###  Maqra & Section
```js
mushaf.maqras() // All 8 maqras (1/8 of a juz) of the last selected juz (or 1 by default)
mushaf.maqra(juz,maqra) // Maqra n of juz n
mushaf.section(juz,section) // Section n of juz n
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

###  Raw
```js
mushaf.rawLine(line) // Raw line n of all pages of the mushaf (combined)
```

```js
// Example 
mushaf.line(1, 3)

// return
الحمد لله رب العلمين ١
```

### Useful methods

```js
 generatePages(maqra, offset) // Get page numbers from n maqra with offset
 getJuzIndex(maqra) // Get juz by maqra number
 getMaqraIndex(maqra) // Get maqra index
 ```


## Source & licensing
Data is generated through [mushafDatasetGenerator](https://github.com/saqfish/mushafDatasetGenerator) project.
View the licensing on that project before deciding to use the data provided here.
