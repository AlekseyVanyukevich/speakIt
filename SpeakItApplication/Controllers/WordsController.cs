using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using SpeakItApplication.Models;

namespace SpeakItApplication.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WordsController : ControllerBase
    {
        private readonly HttpClient _client;
        public WordsController(HttpClient client)
        {
            _client = client;
        }
        [HttpGet("{level}")]
        public async Task<IActionResult> GetWords(int level)
        {
            Random random = new Random();
            HttpResponseMessage response = await _client.GetAsync($"?page={random.Next(29)}&group={level}");
            if (!response.IsSuccessStatusCode)
            {
                return BadRequest();
            }
            string responseData = await response.Content.ReadAsStringAsync();
            List<WordModel> words = JsonConvert.DeserializeObject<List<WordModel>>(responseData).Take(10).ToList();
            return Ok(words);
        }
    }
}
