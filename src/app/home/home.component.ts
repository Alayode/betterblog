import { Component, OnInit } from '@angular/core';

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
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public newPosts = [];
  public users = USERS;
  public posts = POSTS;
  public newMsg = newMessages;
  public comment : string;
  public currentUser = 5;
  public currentTimeStamp =  Date.now();
  public emptyPostObject;

  public baratunde = '/assets/baratunde.jpg'
  public conanOBrien = '/assets/ConanOBrien.jpg'
  public marymeeker = '/assets/marymeeker.jpg'



  constructor() {

  }

  ngOnInit() {
    console.log(this.users);
    this.currentTimeStamp;
    this.newPosts = [];



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


  }
add(comment:string) {
    // this.emptyPostObject;
    // add(comment: string) {
    // comment = comment.trim();
    // if (comment.length <= 0) { return; }
    // console.log(comment);
    // this.emptyPostObject.id = 9999999999;
    // this.emptyPostObject.user = 3;
    // this.emptyPostObject.reply_to = 9999999999;
    // this.emptyPostObject.ts = this.currentTimeStamp;
    // this.emptyPostObject.message = comment;
   if(comment.length > 0) {
     this.newMsg.message = comment;
     this.newPosts.push(this.newMsg);
     this.baratunde;
     console.log(this.newPosts);
     console.log(this.newMsg);
   }
  }


}
