import { Component, OnInit, Input } from '@angular/core';

export const USERS = {
  '1': {
    username: 'marymeeker',
    real_name: 'Mary Meeker',
    verified: true
  },
  '2': {
    username: 'ConanOBrien',
    real_name: 'Conan O\' Brien',
    verified: true
  },
  '3': {
    username: 'baratunde',
    real_name: 'Baratunde',
    verified: false
  }
};

export const newMessages = {
  id: 9999999999,
  user: 3,
  reply_to: 9999999999,
  message: 'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.',
  ts: 1478942943
}

export const POSTS = [
  {
    id: 2374237842,
    user: 1,
    message: 'Spotify has grown to more than 60 million monthly active users, 15 million of whom are paying subscribers.',
    ts: 1337774582
  },
  {
    id: 2374272076,
    user: 2,
    message: 'If I were in prison, I wouldn\'t ruin my spoon trying to tunnel out, because going without morning yogurt is its own prison.',
    ts: 1337968739
  },
  {
    id: 4545435344,
    user: 3,
    message: 'Something beautiful for you from Cornwall. https://media.better.com/microblog/cornwall.jpg',
    ts: 1461607139
  },
  {
    id: 4629293242,
    user: 2,
    reply_to: 4545435344,
    message: 'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.',
    ts: 1478942943
  }
];

interface UserMessage {
  id: number;
  user: number;
  reply_to: number;
  message: string;
  ts: number;
  current_id;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() charsRemaining;

  values = '';
  public numberOfInputs: number;
  public charLimit: number;

  public newPosts = [];
  public users = USERS;
  public posts = POSTS;
  public newMsg : UserMessage;
  // public comment : string;
  // public reply_to_user : number;
  // public user : string;
  // public currentUser = 5;
  // public currentTimeStamp =  Date.now();
  public emptyPostObject;
  public baratunde = '/assets/baratunde.jpg'
  public conanOBrien = '/assets/ConanOBrien.jpg'
  public marymeeker = '/assets/marymeeker.jpg'
  public better = '/assets/better-icon.svg'



  constructor() {

  }

  ngOnInit() {
    this.newPosts = [];

    this.numberOfInputs = 0;
    this.charLimit = 100;
    this.charsRemaining;

    console.log(this.users);





    // for (var i = 0; i < posts.length; i++) {
    //   var post = posts[i];
    //   var timeline;
    //   var frag = document.createDocumentFragment();
    //   var el = document.createElement('div');
    //   el.classList.add('post');
    //   el.innerHTML = '<div class="post"><q>' + post.message + '</q><cite>' + post.user + '</cite>';
    //   frag.appendChild(el);
    //   timeline.appendChild(frag);
    // }



    // id: 9999999999,
    //   user: 3,
    //   reply_to: 9999999999,
    //   message: 'Love this shot. Reminds me of the first time someone found me at the end of a rainbow holding a pot of gold.',
    //   ts: 1478942943


  }

//   interface UserMessage {
//   id: number;
//   user: number;
//   reply_to: number;
//   message: string;
//   ts: number;
//   current_id;
// }

add(comment:string) {

// I know there is a cleaner way of doing this my apologies.
var newObjectMessage = {
  id: 0,
  user: 0,
  reply_to: 0,
  message: '',
  ts: 0
};
  var checkMessageString = comment.length;
  console.log(checkMessageString);
   if(checkMessageString !== 0 && checkMessageString < 100) {
     newObjectMessage.id = 51132131231;
     newObjectMessage.user =  7;
     newObjectMessage.reply_to = 3;
     newObjectMessage.message = comment;
     newObjectMessage.ts = Date.now();
     this.newPosts.push(newObjectMessage);
     console.log(this.newPosts);
     console.log(newObjectMessage);
   } else {
        console.log("Empty messages or messages over 100 Chars are not allowed!!!")
   }
  }



  onKey(event, value) {
    // console.log(event);
    // console.log(value.length);
    var numberOfInputs = value.length;
    this.charsRemaining =  this.charLimit - numberOfInputs;
    // console.log( this.charsRemaining);
  console.log(this.isNegative());
    this.isNegative();
    return;
  }

  isNegative() {
    var isNegNum = this.charsRemaining;
    if(isNegNum <= 0) {
      return true;
    } else {
      return false;
    }
  }

}
