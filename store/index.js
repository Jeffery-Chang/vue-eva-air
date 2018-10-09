export const state = () => ({
    locales: ['zh', 'en', 'jp'],
    locale: 'zh',
    isLoaded: false,
    isWow: false,
    isOpenPIC: false,
    pic_src: '',
    slickData:{
        isOpen: false,
        titleWord: '',
        pic: [
            { "index":  0, "src": "01/01_01.jpg" },
            { "index":  1, "src": "01/01_02.jpg" },
            { "index":  2, "src": "01/01_03.jpg" },
            { "index":  3, "src": "01/01_04.jpg" },
            { "index":  4, "src": "01/01_05.jpg" },
            { "index":  5, "src": "01/01_06.jpg" },
            { "index":  6, "src": "01/01_07.jpg" },
            { "index":  7, "src": "02/02_01.jpg" },
            { "index":  8, "src": "02/02_02.jpg" },
            { "index":  9, "src": "03/03_01.jpg" },
            { "index": 10, "src": "04/04_01.jpg" },
            { "index": 11, "src": "04/04_02.jpg" },
            { "index": 12, "src": "04/04_03.jpg" },
            { "index": 13, "src": "04/04_04.jpg" },
            { "index": 14, "src": "05/05_01.jpg" },
            { "index": 15, "src": "05/05_02.jpg" },
            { "index": 16, "src": "06/06_01.jpg" },
            { "index": 17, "src": "06/06_02.jpg" },
            { "index": 18, "src": "07/07_01.jpg" },
            { "index": 19, "src": "07/07_02.jpg" },
            { "index": 20, "src": "08/08_01.jpg" },
            { "index": 21, "src": "08/08_02.jpg" },
            { "index": 22, "src": "08/08_03.jpg" },
            { "index": 23, "src": "08/08_04.jpg" },
            { "index": 24, "src": "08/08_05.jpg" },
            { "index": 25, "src": "08/08_06.jpg" },
            { "index": 26, "src": "08/08_07.jpg" },
            { "index": 27, "src": "08/08_08.jpg" },
            { "index": 28, "src": "08/08_09.jpg" },
            { "index": 29, "src": "08/08_10.jpg" },
            { "index": 30, "src": "08/08_11.jpg" },
            { "index": 31, "src": "08/08_12.jpg" },
            { "index": 32, "src": "08/08_13.jpg" },
            { "index": 33, "src": "08/08_14.jpg" },
            { "index": 34, "src": "09/09_01.jpg" },
            { "index": 35, "src": "09/09_02.jpg" },
            { "index": 36, "src": "09/09_03.jpg" },
            { "index": 37, "src": "09/09_04.jpg" },
            { "index": 38, "src": "09/09_05.jpg" },
            { "index": 39, "src": "09/09_06.jpg" },
            { "index": 40, "src": "09/09_07.jpg" },
            { "index": 41, "src": "09/09_08.jpg" },
            { "index": 42, "src": "09/09_09.jpg" },
            { "index": 43, "src": "09/09_10.jpg" },
            { "index": 44, "src": "09/09_11.jpg" },
            { "index": 45, "src": "09/09_12.jpg" },
            { "index": 46, "src": "09/09_13.jpg" },
            { "index": 47, "src": "09/09_14.jpg" },
            { "index": 48, "src": "09/09_15.jpg" },
            { "index": 49, "src": "09/09_16.jpg" },
            { "index": 50, "src": "09/09_17.jpg" },
            { "index": 51, "src": "09/09_18.jpg" },
            { "index": 52, "src": "09/09_19.jpg" },
            { "index": 53, "src": "10/10_01.jpg" },
            { "index": 54, "src": "10/10_02.jpg" },
            { "index": 55, "src": "10/10_03.jpg" },
            { "index": 56, "src": "11/11_01.jpg" },
            { "index": 57, "src": "11/11_02.jpg" },
            { "index": 58, "src": "12/12_01.jpg" },
            { "index": 59, "src": "12/12_02.jpg" },
            { "index": 60, "src": "12/12_03.jpg" },
            { "index": 61, "src": "13/13_01.jpg" },
            { "index": 62, "src": "13/13_02.jpg" },
            { "index": 63, "src": "13/13_03.jpg" },
            { "index": 64, "src": "13/13_04.jpg" },
            { "index": 65, "src": "13/13_05.jpg" },
            { "index": 66, "src": "13/13_06.jpg" },
            { "index": 67, "src": "13/13_07.jpg" },
            { "index": 68, "src": "13/13_08.jpg" },
            { "index": 69, "src": "13/13_09.jpg" },
            { "index": 70, "src": "13/13_10.jpg" },
            { "index": 71, "src": "13/13_11.jpg" },
            { "index": 72, "src": "14/14_01.jpg" },
            { "index": 73, "src": "14/14_02.jpg" },
            { "index": 74, "src": "14/14_03.jpg" },
            { "index": 75, "src": "14/14_04.jpg" },
            { "index": 76, "src": "14/14_05.jpg" },
            { "index": 77, "src": "14/14_06.jpg" },
            { "index": 78, "src": "14/14_07.jpg" },
            { "index": 79, "src": "14/14_08.jpg" },
            { "index": 80, "src": "14/14_09.jpg" },
            { "index": 81, "src": "14/14_10.jpg" },
            { "index": 82, "src": "14/14_11.jpg" },
            { "index": 83, "src": "14/14_12.jpg" },
            { "index": 84, "src": "14/14_13.jpg" },
            { "index": 85, "src": "14/14_14.jpg" },
            { "index": 86, "src": "14/14_15.jpg" },
            { "index": 87, "src": "14/14_16.jpg" },
            { "index": 88, "src": "14/14_17.jpg" }
        ],
        word: [
            { 'index': 0, action: 0, action_end: 6 },
            { 'index': 1, action: 7, action_end: 8 },
            { 'index': 2, action: 9, action_end: 9 },
            { 'index': 3, action: 10, action_end: 13 },
            { 'index': 4, action: 14, action_end: 15 },
            { 'index': 5, action: 16, action_end: 17 },
            { 'index': 6, action: 18, action_end: 19 },
            { 'index': 7, action: 20, action_end: 33 },
            { 'index': 8, action: 34, action_end: 52 },
            { 'index': 9, action: 53, action_end: 55 },
            { 'index': 10, action: 56, action_end: 57 },
            { 'index': 11, action: 58, action_end: 60 },
            { 'index': 12, action: 61, action_end: 71 },
            { 'index': 13, action: 72, action_end: 88 }
        ]
    }
})
export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
            state.locale = locale;
        }
    },
    SET_LOAD(state, status) {
        state.isLoaded = status;
    },
    SET_WOW(state, status) {
        state.isWow = status;
    },
    SET_PIC(state, status) {
        state.isOpenPIC = status;
    },
    SET_SRC(state, status) {
        state.pic_src = status;
    },
    SET_SLICK(state, status) {
        state.slickData.isOpen = status;
    },
    SET_SLICK_WORD(state, status) {
        state.slickData.titleWord = status;
    }
}
