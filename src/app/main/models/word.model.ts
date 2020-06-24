export class Word {
    constructor(
        public id: string,
        public word: string,
        public image: string,
        public audio: string,
        public transcription: string,
        public wordTranslate: string
    ) { }
}