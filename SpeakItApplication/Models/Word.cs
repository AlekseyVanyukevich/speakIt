using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpeakItApplication.Models
{
    public class WordModel
    {
        public string Id { get; set; }
        public string Word { get; set; }
        public string Image { get; set; }
        public string Audio { get; set; }
        public string Transcription { get; set; }
        public string WordTranslate { get; set; }

    }
}
