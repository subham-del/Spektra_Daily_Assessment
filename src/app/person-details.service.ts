import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonDetailsService {

  constructor() { }

  techPeoples = [
    { name: 'James Dyson', technology: 'Product Designer',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0QMqsQNt7Ypfcz4Ucb6CCrm_Ngs6odRS7Uw&s', description: 'James Dyson is a British inventor, product designer, and businessman with a net worth of US $4.5 billion, best known as the founder of Dyson brought innovations in the vacuum and blower industry to a whole new level. James Dyson is responsible for the No Blade air multiplier and the famous AirBlade hand dryer. He is renowned for inventing the bagless vacuum cleaner, and now almost every family can find Dyson products. Dubbed the Steve Jobs of Industrial Design, Over the years, have achieved today’s success using creative services of industrial design.' },
    { name: 'Kevin Mitnick', technology: 'Cyber Security',image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ7rZ6Wblhq9khviqJIXrB9YxJ701tg1zrow&s', description: 'Mitnick is a unique person in our industry. He was once on FBIs Most Wanted list for having gained unauthorized access to major corporations computers, software, cell phone manufacturers and ISPs, and for allegedly stealing software from Motorola, Nokia, Fujitsu¹ and others.' },
    { name: 'Richard Socher', technology: 'AIML',image:'https://media.wired.com/photos/5932309058b0d64bb35d025b/master/w_1600%2Cc_limit/Richard-Socher-Headshot-inline.jpg', description: 'Socher has been dubbed “one of the artificial intelligence and machine learning space’s virtuosos.” By providing a deeper grasp of context and mood, his methods are revolutionising natural language processing and computer vision.  ' },
    { name: 'John McAfee', technology: 'Blockchain', image: 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iBBY5qe_EhbI/v0/-1x-1.jpg', description: 'Antivirus Software tycoon John McAfee is certainly the most controversial celebrity in the cryptocurrency space owing to his bizarre predictions and bets. McAfee maintains that Bitcoin will surpass $1 million by 2020 and continues to promote other cryptocurrency projects. McAfee recently divulged that he charged companies  $105,000 for every tweet he sent out promoting an Initial Coin Offering or some other token. Given that his tweets were able to sway crypto markets, the disclosure left many of his followers disgruntled.' },
  ]

}
