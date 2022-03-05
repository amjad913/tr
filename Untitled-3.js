
let images = document.getElementsByTagName('img');
for(let i = 0; i < 156 ; i++)
  images[i].setAttribute('hidden', true);


function myfunction()
{
  let images = document.getElementsByTagName('img');

  for(let i =0 ; i < 5; i++)
    images[i].setAttribute('hidden', true);
  let rand = Math.floor(Math.random()*images.length);
  images[rand].removeAttribute('hidden');
}

var counter=0;
function a() {
    counter+=1;
    if(counter>3)
        document.getElementById("btn").style.display = "none";
}

function t1(){ alert ("The Chariot - represents overcoming obstacles through determination, focus and willpower, you will be feeling motivated, ambitious and in control. Now is a time to go for what you really want. The Chariot is not without its challenges, there may be many obstacles in your path but if you stay focused, keep your composure and are confident in your abilities, you will be successful");
}

function t2(){
  alert("The Death - usually signifies spiritual transformation and a time of change and new beginnings The transformation or change that Death can bring can be difficult, unexpectet");
}

function t3(){
  alert("The Devil - a sign of feeling trapped you may feel as though outside influences or forces beyond your control are restricting you, leaving you feeling powerless and victimised. However, this is the illusion The Devil creates. You are in control of your own destiny Don’t give up and don’t give away your power. You don’t have to tolerate negativity, criticism, manipulation or abuse from anyone.");
}

function t4(){
  alert("THE EMPEROR - you have or are about to reach a new level of mastery, usually in your work ,Others will see you as an expert in your field and will recognize your ideas and opinions on professional matters");
}

function t5(){ 
  alert("The Empress - tells you to be kind to yourself and search for beauty and happiness in your life this is the perfect time to take up a new hobby that enables you to access this part of yourself");
}

function t6(){
  alert("the Fool tarot card generally indicates that you are on the verge of an unexpected and exciting new adventure. This may require you to take a blind leap of faith There will be a rewarding experience that will contribute to your growth as a human being")
}

function t7(){
  alert("The Hanged Man - indicates that you are in a situation that you are not happy with. You may be feeling like you are stuck in a rut or trapped in a situation or frame of mind that is not making you happy but you have the power to release yourself");
}

function t8(){
  alert("The Hermit - You may find that you need time alone to gain a deeper understanding of yourself, to remove yourself from the daily grind in order to discover your true spiritual self you may be going through an anti-social phase where you just don’t want to interact with people as much as you normally would.");
}

function t9(){
  alert("The Hierophant - advises you to Learn everything you can about your chosen area. Let that knowledge become a part of you and an operative influence on your day-to-day awareness");
}

function t10(){
  alert("the High Priestess- tells you to slow down and reflect on what you learned and to acquire even more knowledge before making a decision or taking action and listening to your intuition rather than prioritizing your intellect and conscious mind.");
}

function t11(){
  alert("the Judgement - indicate that you and/or someone you care about are being judged too harshly by others or you are judging people harshly or making snap judgements yourself also be an indication that you have achieved a level of clarity and composure that allows you to calmly evaluate yourself and your choices in order to make positive decisions");
}

function t12(){
  alert(" Justice - is showing you that all actions have consequences. So look at your present circumstances in that context, how have your own actions contributed to where you find yourself today? Are there any karmic lessons that you should be learning from your current situation");
}

function t13(){
  alert("The Lovers - can represent finding the balance within oneself. You are learning to understand your self indication that you have major choices to make or are faced with a dilemma Don’t automatically go for the easy road, make sure you have all the information and make the right decision.");
}

function t14(){
  alert("The Magician card reveals how your wishes and desires can be realized through determination and willpower you can be assured that you have the drive to make your dreams happen It might be in your new job, a new business venture, or a new love. This is the time for positive changes in your life and for you to take action.");
}

function t15(){
  alert("The Moon - something about a situation or person in your life is not what it appears to be and you need to trust what your instincts are telling you in order to see past this illusion can also signify that you are letting your anxiety or fear overwhelm you which may be having a negative effect on your outlook and causing you to suffer from mood swings");
}

function t16(){
  alert("The Star - you will find yourself feeling very positive, motivated and free. You will be feeling very serene and in tune with the universe It is the period of calm and stability that follows the storm you are full of calm, well-balanced energy and you are open to healing the wounds of the past");
}

function t17(){
  alert("The Strength - you are learning to master your fears and anxieties, to be courageous and daring. You have all the skills you need to be successful, the focus now is to conquer your inner worries and believe in yourself. Take the time you need to master your emotions, be patient and compassionate with yourself and you will find a new confidence in yourself and your abilities.");
}

function t18(){
  alert("The Sun - things should be going well for you as this card also represents success and enthusiasm. You will find that people are drawn to the happy vibes and positive energy you are giving out and you will bring light and joy to everyone and everything you come into contact with It is also the card of truth so if you have been the victim of lies or deception, The Sun is coming to shine its light on the deceit to reveal the truth");
}

function t19(){
  alert("the Temperance - you have found your inner calm and have a good perspective on things. It is a sign that the relationships in your life are harmonious. You have learned not to allow yourself to be dragged into other people’s conflict or to let minor issues knock you off you are truly in touch with who you are inside");
}

function t20(){
  alert("The Tower - sudden unexpected change. This change usually is scary, life changing and often unavoidable The Tower may be warning you that it’s time to start acting more responsibly");
}

function t21(){
  alert("The Wheel of Fortune - big changes are coming. These changes should be for your greater good, but remember not all change is easy even if it’s leading you to your destiny");
}

function t22(){
  alert("The World - you have endured the hardships and learned your lessons and now you will reap the rewards. You should be proud of what you have achieved, it has not been easy to get here but you’ve done it. The universe is smiling upon you and luck is on your side");
}

function t23(){
  alert("the Ace of Swords - represents new ideas, new beginnings, new projects, new plans and breakthroughs. It represents making correct decisions, being assertive and justice and authority. The Ace of Swords can indicate good news in relation to legal matters ");
}

function t24(){
  alert("the Two of Swords - represents a stalemate, truce or being at a crossroads. It indicates that you are sitting on the fence or struggling to make/ avoiding a difficult, stressful or painful decision It can also signify being torn between two loyalties, relationships, situations, offers and represents blocking emotions, being in denial, blindness to see the truth.");
}

function t25(){
  alert("the Three of Swords - represents unhappiness, heartache, sorrow and sadness.it generally indicates a period of difficulty or hardship, usually on an emotional level. Distraction, conflict, disillusion and serious misunderstanding You have suffered or will suffer a loss or betrayal of some kind");
}

function t26(){
  alert("the Four of Swords - represents fear, anxiety and stress it tells you that the issues you are facing are actually not as bad as you believe them to be and there are solutions available. However, it suggest that you are allowing negativity to set in and becoming so overwhelmed if you leave aside your fears and logically plan for the future, you will find a way forward. ");
}

function t27(){
  alert("the Five of Swords - represent defeat, change surrender and walking away. serious conflict, stress and lack of communication. You must overcome being challenged by others such as standing up for oneself and fighting back. ");
}

function t28(){
  alert("the Six of Swords - represents progress, moving into calmer waters, moving on or moving forward overcoming hardship, healing, relief and stability so you can expect problems in your life to settle down and things to be much easier to deal with.");
}

function t29(){
  alert("the Seven of Swords - represents deception, lies, trickery, cheating and lack of conscience also signifies mental manipulation enemies who masquerade as friends it also represent flexibility, adaptability, sharp wit, resourcefulness, being strategic or being overly rational ");
}

function t30(){
  alert("Eight of Swords - feeling of being trapped and victimized. You may feel powerless because, in your mind, you feel that changing the situation might be beyond you The good news is that because these traps are things that we create ourselves, we can also leave them if we put our minds to it.");
}

function t31(){
  alert(" The Nine of Swords - fear and anxiety, about all the things that worry you and keep you up at night you find yourself reciting all the possibilities - all the things that can happen to you. You are haunted by what could be analyze yourself and think if this is a feeling that is within your control or if there are other factors that contribute to your anxiety. Concentrate on the matters which you can control, and learn to ask for help. ");
}

function t32(){
  alert("The Ten of Swords - a certain force of extreme magnitude has come to hit you in your life - one that you may have not foreseen.your mentality is ‘poor me’, you feel like there is nothing you can do the end of something means a new beginning. Let go of what you have lost, and focus on the new path forward because that is where your life is meant to go.");
}

function t33(){
  alert(" the Page of Swords - you are very eager to execute an idea that you have been having or a project that you cooked up just recently. You are quite passionate about it it signifies communication and sharing of ideas. Whether it is someone else’s ideas or yours, it is time to open up and talk about them   ");
}

function t35(){
  alert("The Queen of Swords - you will need to become independent with your judgments You must rely on the unbiased intelligence you need you are trying to keep a strong objective view while avoiding getting emotions involved ");
}

function t34(){
  alert("the Knight of Swords - it tells you that a big change is coming, one you have been awaiting for quite some time and you better be ready to roll with it when it does. It’s time to jump in and seize the moment");
}

function t36(){
  alert("the King of Swords - represents structure, routine, self-discipline, power authority being methodical, using your head, mind over matter and the head over the heart. ");
}

function t37(){
  alert("the Ace of Cups - signifies new beginnings, usually in terms of love, empathy, compassion and/or happiness. you will be feeling happy, positive and good about yourself. Now is a great time to begin new friendships it also can be an indication of good news or celebrations coming your way.");
}

function t38(){
  alert("Two of Cups - things should be going well for you and life should be very harmonious. While it normally relates to unity and love in romantic relationships it can signify harmony and mutual respect and appreciation in friendships and partnerships");
}

function t39(){
  alert("the Three of Cups - you can look forward to a happy event in your life. It signifies group of people coming together with open hearts and minds to celebrate important events parties, , weddings, engagement and other similar celebrations. It can signify someone from your past coming back in to your life");
}

function t40(){
  alert("the Four of Cups - missed opportunities, remorse or regret becoming self-absorbed due to depression, negativity or apathy. you may be focusing on the negative or feeling like the grass is greener on the other side. You may feel like you have lost your passion and motivation for life, it comes with a warning to be mindful of the opportunities or offers available to you.");
}

function t41(){
  alert("the Five of Cups - can represent sadness, loss, loneliness and despair, heartbreak it indicates that you are focusing on the negative. This may be the result of some sort of unwelcome change you have suffered maybe you've being abandoned by someone significant to you or you abandoning plans or people in your life. It can also indicate loneliness or isolation. However, for all the negative connotations this card can bring there is a positive message underneath it all");
}

function t42(){
  alert("the Six of Cups - you may be being influenced by past events, reminiscing about the past or thinking about someone from your past , can represent having children or taking care of or working with them , It can also represent protection and family. If you have been going through a tough time, the Six of Cups may be telling to take the support available to you from family and close friends");
}

function t43(){
  alert("the Seven of Cups - It can be an indication that you have so many choices or so many things going on at once that you may be overwhelmed or unable to focus properly , it indicates that you need to make a decision in your life and realistically look at where you are. Take proactive steps to make your situation better rather than fantasising about how you want it to be.");
}

function t44(){
  alert("the Eight of Cups represents abandonment. It can signify walking away from people or situations in your life or abandoning your plans , escapism and turning your back on or leaving bad situation , Strength and courage are necessary to walk away from what you know into an unknown future");
}

function t45(){
  alert("the Nine of Cups - your wishes will be coming true or your dreams will become a reality. If you have experienced hardship, sorrow or pain recently, this card tells you that the bad times are behind you now and a time of happiness, joyfulness and fulfilment is coming , you will be able to accomplish anything you put your mind to as it represents triumph, success and achievement.");
}

function t46(){
  alert("the Ten of Cups - Life should be full of true contentment. This applies to you and your circle of family and friends. Everything you need you should have in abundance and you will be feeling truly blessed. Now is a time to reap the rewards of your previous hard work. It also represents playfulness and creativity so you may find the fun factor in your life");
}

function t47(){
  alert("the Page of Cups - a bringer of messages. This can be in the form of happy news, important information, invitations to social events,It may be a sign that you need to connect to your inner child by embracing the fun and frivolous side of life");
}

function t48(){
  alert("the Knight of Cups - can represent proposals, offers, good news and invitations ,now is the time to take action and follow your heart or that you are about to get swept off your feet");
}

function t49(){
  alert("the Queen of Cups - you should be mindful of how you treat yourself and others or to treat people with compassion and sympathy. It can also indicate that you may be more sensitive than you let on to the outside world and that harsh actions or hurtful comments affect you more than you show to the outside world.");
}

function t50(){
  alert("the King of Cups - you will be finding the balance between your mind and your heart. You will learn to control your emotions and find the wisdom to accept that which you cannot change. You should be gaining a deeper level of emotional maturity");
}

function t51(){
  alert("the Ace of Pentacles - it signifies starting something new which will be very positive for you. You should be feeling very optimistic you will be ready to make your dreams a reality. The time is coming for you to manifest your goals, achieve your dreams and realise your potential. You will be motivated and ready for the challenge.");
}

function t52(){
  alert("the Two of Pentacles - you are trying to find or maintain the balance between various areas of your life , you are resourceful, adaptable and flexible However, it can be a warning that trying to juggle too many things at once and not prioritising what is important can lead to failure and exhaustion. Try to evaluate where you are putting your energy and cut back on what is not necessary in order to maintain a balanced and happy life");
}

function t53(){
  alert("the Three of Pentacles - signifies hard work, determination, dedication and commitment so whatever you are doing at the moment, you are likely to be giving it 100% You have worked hard to overcome your challenges and the effort you have put in should be paying off");
}

function t54(){
  alert("the Four of Pentacles - you are holding on to people, possessions, situations or past issues. It can be an indication that there are deep seated issues affecting you that you need to process and let go of. you may be trying very hard to cling onto the people or possessions that give you a sense of security. You may be holding onto things in an unhealthy, possessive, controlling or toxic way or someone may be holding onto you in such a manner.  It can indicate that you need to establish your boundaries or respect the boundaries of other people");
}

function t55(){
  alert("the Five of Pentacles - You may be feeling like the world is against you and nothing is going your way when it appears. It can signify bad luck, struggles or adversity If you are feeling left out the cold, firstly, remember that this situation is only temporary and then ask yourself if you are reaching out for any help or support that is available.");
}

function t56(){
  alert("the Six of Pentacles - Someone in your life may be very generous towards you with gifts or money or simply generous with their time, knowledge or wisdom. Alternately, you may have so much prosperity that you are the one in a position to help others. You may be feeling a strong sense of community or compelled to help those around");
}

function t57(){
  alert("the Seven of Pentacles - you have been working very hard and it will soon start to pay off. if you felt like you’re getting nowhere, as it tells you success is just around the corner! Whatever you have been putting your energy, you will start to reap the rewards. It can also signify being at a crossroads in terms of which life direction to take ");
}

function t58(){
  alert("the Eight of Pentacles - The effort you put in will not be in vain as your hard work will pay off and lead to results, rewards or the accomplishment of your goals The skills you are learning at the moment will stand to you later in life and you will come away from this experience not only with the inner wisdom you've gained but with a sense of pride and self-confidence from achieving your ambitions");
}

function t59(){
  alert("the Nine of Pentacles - you have worked very hard to create the success and status you are experiencing and now is the time to enjoy it you may find yourself enjoying the finer things in life when it appears. This card also tells you that you have gained maturity and wisdom through your perseverance.");
}

function t60(){
  alert("the Ten of Pentacles - you can expect especially good things in financial or material issues , You may be feeling very close to your family at this time Or you may be looking forward to a family event, celebration or gathering.");
}

function t61(){
  alert("the Page of Pentacles - is the bearer of good news in money, business, education, career, property or health. decide what you want and really go for it. Jump in and seize your opportunities while you can. It tells you that if you make the right decisions now and put the groundwork in you will achieve your long terms goals.");
}

function t62(){
  alert("the Knight of Pentacles - represents common sense, responsibility, practicality, working hard for what you want and finishing what you start. It signifies achieving your wishes or dreams through perseverance and determination and hard work");
}

function t63(){
  alert("the Queen of Pentacles - represents high social status, prosperity, wealth, luxury, success , it tells you to set goals and work towards them steadily , it tells you to approach issues in a sensible, practical manner and you will be successful");
}

function t64(){
  alert("the King of Pentacles - represents trying to better oneself, hard work paying off, reaching goals, seeing things through to the end and being proud of your achievements.");
}

function t65(){
  alert("the Ace of Wands - represents good news and new beginnings. It signifies taking action, physically starting something, finding new passion, enthusiasm or spark , you have creative spark and are feeling bold and daring");
}

function t66(){
  alert("the Two of Wands - having two paths you have decisions to make or a choice between two options This card can signify moving , sudden departures, deciding if you will stay or go. It can also indicate a lack of contentment with your life");
}

function t67(){
  alert("the Three of Wands - represents freedom, adventure, travel, moving abroad , It can indicate hard work paying off, success and being happy with your choices or the outcome of your situation it tells you that fortune favours the brave");
}

function t68(){
  alert("the Four of Wands - represents happy families, celebrations, surprises, parties, weddings and events. It signifies coming home and reunions, feeling like you fit in and being made to feel welcome and supported. It tells you that you will be proud of your achievements and that your self-esteem will be high");
}

function t69(){
  alert("the Five of Wands - represents rows, arguments, conflict, fighting and disagreements You can expect a lack of control, pettiness, strikes, chaos it would indicate that you need to get your tempers under control");
}

function t70(){
  alert("the Six of Wands - represents success, victory, winning, achievement and having the advantage It is a card of strength and stability and can also represent successful outcomes and winning battles");
}

function t71(){
  alert("the Seven of Wands - represents standing up for what you believe in It can suggest that you are under attack, being harassed, blamed or scapegoated but you are resisting this card remainder to you to stand up for yourself and respect your boundarie");
}

function t72(){
  alert("the Eight of Wands - represents speed, rushing, progress, movement and action. It is sudden action, excitement, exciting times You will be feeling positive and energetic You will be thinking on your feet, seeing results and finding solutions. Your hard work will be paying off and you will be ahead of the game");
}

function t73(){
  alert("the Nine of Wands - you are half way through a battle. Recent events have left you drained of all energy and feeling like you can’t go on, but you are so close to getting what you want! You just need to gather the last of your strength and push forward and you will be successful , things have not worked out the way you planned and there have been challenges and setbacks along the way But you are close to success or nearly there.");
}

function t74(){
  alert("the Ten of Wands - represents a situation that started off as a good idea but has now become a burden. It signifies problems, responsibilities, being overburdened, overloaded and stressed. It indicates that you have a huge weight on your shoulders It suggests that you have taken on too much and may be heading for burn out");
}

function t75(){
  alert("the Page of Wands - represents good news that should be coming to you shortly. This may take the form of letters, phone calls or word of mouth , this card also signifies having bright ideas about what you can do, being inspired or creative, making new exciting plans, thinking big and finding something you are passionate about");
}

function t76(){
  alert("the Knight of Wands - indicates that things are going better than you expected and any ventures you have taken on are likely to be more successful than you hoped , It tells you to take action and put your ideas and plans into motion but don’t rush in without thinking and just expect things to work out.");
}

function t77(){
  alert("the Queen of Wands - indicates that you will be optimistic, outgoing and full of energy You will be accomplishing many tasks and keeping a lot of balls in the air, People will be tired just looking at you because you are always on the go! This card represents taking charge of things and organising your life.");
}

function t78(){
  alert("the King of Wands -  indicates that you will have the energy, experience and enthusiasm to accomplish what you set out to achieve at this time. You are taking control of your life. You will motivate those around you, lead the way forward and set a good example for those who look up to you.");
}


function t1r(){ alert("The Chariot reversed - can indicate that you feel powerless and are lacking direction. You need to take control of your own destiny and not let outside forces determine your path");
}

function t2r(){
  alert("Death reversed - indicates that you are resisting a change that is necessary for you to move forward. Nothing new can begin while you are holding on to this old negative energy you are finding it difficult to let go, once you do, new energy will come into your life to give you a new brighter beginning");
}

function t3r(){
  alert("The Devil reversed - can signify that you are becoming aware of the things that have been trapping you you are starting to see the light and take back control of yourself and your life.Do not fall back into the old bad or risky behaviours that led you so close to danger.");
}

function t4r(){
  alert("The Emperor in reversed - can indicate a lack of discipline to get the job done , You can feel powerless or helpless in your present situation, and you find it hard to come up with a solution , it also means that you are dealing with a person that abuses his authoritative powers over you to domineer you");
}

function t5r(){
  alert("The Empress reversed advises you to shift the focus and ground yourself to correct this imbalance. Don’t sacrifice yourself so much and make self-love and self-care a priority. You also need to rest and receive love.")
}

function t6r(){
  alert("The Fool in reverse indicates that you start a lot but do not finish anything and that you are literally acting like a fool This card is here to warn you that now is not the time for spontaneity and freedom. You must finish what you have started and deal with your responsibilities before you can safely move on.Be sure that you do not get lost in your own thoughts");
}

function t7r(){
  alert("The Hanged Man reversed - can indicate that you are being impulsive and making rash decisions as a way to distract yourself and you may be jumping from one bad situation to the next without considering where this behaviour is taking you.");
}

function t8r(){
  alert("The Hermit reversed -is telling you that it is time to come back to the world and the people around you. Taking time for soul-searching and self-reflection can be a great thing in moderation but too much can be damaging you may be feeling shy or apprehensive about being in social situations. Don’t be afraid to get back out there");
}

function t9r(){
  alert("the Hierophant reversed - You are being guided to follow your own path and adopt your own spiritual belief systems rather than blindly following others'. It may feel unsettling at first as you make your own way, but over time, you will learn to trust yourself and tap into your inner knowledge");
}

function t10r(){
  alert("The High Priestess reversed - mean that you are repressing your own feelings and that you are finding it hard to listen to your own intuition , Be careful as others are trying to influence you stand steadfast with your own beliefs");
}

function t11r(){
  alert("the Judgement in reversed -  you are allowing fear and self-doubt to hold you back from making the decisions necessary to move forward in a positive direction , you may be refusing to learn the karmic lessons of the past");
}

function t12r(){
  alert("Justice reversed - You may feel you are being victimised or blamed for something that is not your fault. Whatever the situation, you must try to maintain your balance. Even if you didn’t create the situation, you can choose how you react to it and that can be a lesson in itself. Justice in a reversed position can also be an indicator of someone trying to avoid their karma ");
}

function t13r(){
  alert("The Lovers reversed - indicates that you may be struggling to take ownership of the decisions you’ve made.You may be feeling uncertain of the direction your life is going in learn from past mistakes and let them go");
}

function t14r(){
  alert("The Magician reversed - may warn you about someone who pretends to have your best interest, but behind that, there may be an intention to manipulate for selfish gain , at elso can mean that although you have the wisdom, knowledge, and skills, you are still uncertain about them and do not use them to achieve your goals.");
}

function t15r(){
  alert("The Moon reversed - indicate secrets or lies being exposed You may be kidding yourself about your role in creating your current circumstances or you may be struggling to separate your own deception or fantasies from reality it indicates that you will get an answer or clarity on the matter ");
}

function t16r(){
  alert("The Star in a reversed - indicate that you are feeling hopeless. Perhaps the difficult situations you have been through in the past have drained you of your lust for life and your faith in the universe’s plan for you. You feeling anxious and overwhelmed and maybe you lost your confidence, your belief in yourself and your trust in your own abilities , A change of attitude is needed to resolve this");
}

function t17r(){
  alert("the Strength reversed - you are not tapping into the inner strength you have. It is does not indicate a lack of strength so much as it indicates that you are letting fear, anxiety or low self-esteem paralyse you");
}

function t18r(){
  alert("The sun in reversed - sadness, depression and pessimism. You may be finding it difficult to focus on the positive It can signify a lack of enthusiasm for life, being unclear on the right path to take or being unable to see the way forward you are letting negative energy/thoughts close you off to the happiness and joy that is all around you");
}

function t19r(){
  alert("Temperance reversed - you are behaving in a hasty or reckless fashion you have lost touch with your own inner calm and tranquillity which can lead you to seek gratification in risky ways, a lack of harmony with the people in your life so you may find yourself clashing with those closest to you");
}

function t20r(){
  alert("The Tower reversed - can be a sign that you have narrowly avoided a disaster. You will need to learn from the experience in order to prevent the lesson from coming back around again");
}

function t21r(){
  alert("the Wheel of Fortune reversed - there is a challenging time ahead and that the change coming may be difficult to adjust to. It can represent that things had been going well and have suddenly and quite unexpectedly fallen apart. This sudden deterioration can leave you feeling powerless you have to remember These ups and downs are part of life and often we learn more from hardship than we do from good fortune.");
}

function t22r(){
  alert("The World reversed - you have not accomplished what you set out to do and things have become stagnant You may be throwing all your energy into trying to make something work that is not working for you if you’ve thrown everything you’ve got a something and it’s still not working for you, The World reversed may be telling you that it’s time to accept the disappointment and cut your losses");
}

function t23r(){
  alert("the Ace of Swords reversed - can represent a lack of ideas, misinformation, confusion and failure lack of mental clarity, memory loss and an inability to concentrate lack of communication, creative blocks It can also indicate bad news in relation to legal matters");
}

function t24r(){
  alert("the Two of Swords reversed - It indicates that fear, worry, anxiety or stress is overwhelming you and you may be experiencing emotional or mental turmoil as a result leading to an inability to make a decision");
}

function t25r(){
  alert("the Three of Swords reversed - indicates that you are recovering from your heartbreak and getting over the worst part of a bad situation or event.It can be an indication that you are repressing your grief, sorrow or traumatic memories");
}

function t26r(){
  alert("the Four of Swords reversed - represents awakening and finding mental strength. You will be coming out of isolation after a period of solitude or mental overload you are slowly recovering and healing");
}

function t27r(){
  alert("the Five of Swords reversed - It can also represent someone being held accountable for their actions, crimes being uncovered, violence and revenge. It can also signify risking everything, being relentless, not heeding warning signs and surrendering to challenges");
}

function t28r(){
  alert("The Six of Swords reversed - represents feeling stuck, trapped overwhelmed, restricted and having nowhere to run or choosing to stand your ground");
}

function t29r(){
  alert("the Seven of Swords reversed - signify ignoring warning signs, being outsmarted or finding that your strategies or plans are unworkable.stealing credit for other people’s achievements or running away from consequences");
}

function t30r(){
  alert("Eight of Swords reversed - means that one is capable of making conscious decisions because they are confident in who they are, and their power to affect change in both themselves and the world. It's time to free ones self from the past and creating room for new things and experiences.");
}

function t31r(){
  alert("Nine of Swords reversed - you may find yourself being terrorized by nightmares, by anxiety and stress. Some trauma from your past is coming back, and you find the grief of unresolved issues overwhelming.You must understand that this suffering will not cease until you yourself put in the effort to leave it.");
}

function t32r(){
  alert("Ten of Swords reversed - signals the finality of defeat There is no way to avoid this tragedy - it has happened over a long course of events that have been a long time coming also comes to a recognition that you have hit rock bottom, there is no more that is left for you to give. With that also comes the release that things can only get better");
}

function t33r(){
  alert("Page of Swords in reversed - you are holding back from expressing your truth, especially in a public forum. You prefer to express your thoughts and opinions privately or anonymously it can also suggest you are acting hastily, without thinking things through. You have a lot of energy behind you but are not using it effectively");
}

function t34r(){
  alert("The Queen of Swords reversed - you may be thinking too much with your heart, and you are becoming too emotionally involved with your current situation. You have to start thinking more objectively");
}

function t35r(){
  alert("the Knight of Swords reversed - you are not ready to jump on or that you are out of your depth. Whatever the case, this card tells you that if you miss this opportunity you will get left behind. also represent being out of control, leading others to trouble or danger and heading for a fall ");
}

function t36r(){
  alert("the King of Swords reversed - signifies a lack of logic, reason, integrity, ethics or morals it can also indicate legal matters not going in your favour and it can represent being power hungry");
}

function t37r(){
  alert("The Ace of cups reversed - can indicate sadness, pain or blocked/repressed emotions. It can also signify that you may receive some bad or upsetting news. you may find that you are not in the mood for socialising or meeting new people");
}

function t38r(){
  alert("the Two of Cups reversed - can indicate a lack of harmony or balance in your life. It can signify that you may fall victim to some form of inequality, abuse or bullying , It can also be a sign of arguments with friends, family, partners, business partners or colleagues.");
}

function t39r(){
  alert("the Three of Cups reversed - can indicate celebrations being cancelled. This may take the form of a cancelled party, a cancelled wedding or an engagement , or maybe your social life may be non-existent at the moment or that you’ve grown apart from your friends");
}

function t40r(){
  alert("the Four of Cups reversed - you are pulling yourself out of the rut you have been inleaving regrets, remorse and wishful thinking in the past and focusing on the present and moving forward in a positive direction. You will be seizing opportunities with enthusiasm and focus.");
}

function t41r(){
  alert("the Five of Cups reversed - represents acceptance, forgiveness and healing. You have come to terms with your grief and sorrow. You have realised that living the rest of your life in regret, mourning or sadness will not change the past and have accepted that you have to move on with your life.");
}

function t42r(){
  alert("the Six of Cups reversed - letting go of the past and being ready to move on to the future. It can be an indicator of growing up, becoming more mature or leaving home. It can also indicate letting go of childhood issues or childishness it tells you to stop looking at past events through rose tinted glasses, if that’s the case you need to bring your focus back to the present moment and appreciate what you have today.");
}

function t43r(){
  alert("the Seven of Cups reversed - can indicate that you are finding clarity and getting back to reality after a period of indulging in fantasies or living in a dream world. You may be finally starting to act decisively and to see the correct path for you clearly");
}

function t44r(){
  alert("the Eight of Cups reversed - you may be accepting your lot in life or staying in bad situation that makes you terribly unhappy because you are afraid of moving on or worried about what the future might hold if you leave. You may appear happy to those around you but underneath it all you know you need to get let go of certain people or situations in your life in order to move forward.");
}
function t45r(){
  alert("the Nine of Cups reversed  - You may have gotten what you wanted but now find that it’s not how you hoped it would be. Alternately, you may have gotten what you wanted and subsequently lost it and are now feeling the devastation that can bring ,You may feel let down or disappointed");
}

function t46r(){
  alert("the Ten of Cups reversed - It can indicate family breakdowns, problems within a family, neglect or abuse it can be an indicator of family relationships not being as stable as they may appear outwardly. There may be secrets, problems");
}

function t47r(){
  alert("the Page of Cups reversed - it can bring bad news For instance, you may find that a social event you have been looking forward to is cancelled. Whatever form this news takes it could possibly cause sadness, disappointment");
}

function t48r(){
  alert("the Knight of Cups reversed - telling you not to jump to conclusions or to check your facts before taking action ,  also indicate that you may be procrastinating or avoiding taking action rather than confronting a situation head on");
}

function t49r(){
  alert("the Queen of Cups reversed - you may be feeling overly sensitive, insecure, depressed ,  It warns you to avoid becoming bitter or vengeful if things do not go your way. You should always seek to rise above your challenges and not give way to spitefulness or jealousy");
}

function t50r(){
  alert("the King of Cups reversed - can represent being overly emotional or too sensitive. It can signify a lack of emotional maturity It tells you that you need to take responsibility for your emotions and well-being.");
}

function t51r(){
  alert("the Ace of Pentacles reversed-  represents missed opportunities or lack of opportunities It can also signify delays, lack of planning and poor control so make sure you are putting the work and planning into achieving your goals when it appears");
}

function t52r(){
  alert("the Two of Pentacles reversed - you are biting off more than you can chew! You may be finding it impossible to maintain the balance between the various areas of your life. This Make you feel overwhelmed, overextending yourself and lack of organisation. Maybe you're making poor choices because you you're under pressure and may be getting yourself into more of a mess than you need to.");
}

function t53r(){
  alert("the Three of Pentacles reversed - you are not learning from your mistakes or are unwilling to do so. You may be overwhelmed with the sense that you do not know what you are doing. However, you are not putting the effort into learning");
}

function t54r(){
  alert("The Four of Pentacles reversed - may indicate that you are holding onto something far more than you should.");
}

function t55r(){
  alert("the Five of Pentacles reversed - you have been going through a tough time as it represents hardship coming to an end, overcoming adversity or a positive change in circumstances. You have struggled through the hard times. When everything seemed hopeless, you held on and now you can see the light at the end of the tunnel");
}

function t56r(){
  alert("the Six of Pentacles reversed - Someone in your life may be showing you generosity but have ulterior motives or they may be in a position to help you but they may be abusing that position or trying to make you subservient to them it can be an indication that you are using your power for ill means you may need to assess if you are going to the extreme of being too greedy or mean or the other extreme of being too generous or gullible");
}

function t57r(){
  alert("the Seven of Pentacles reversed - you may have been working very hard or putting lots of effort into something for little pay or reward. It can also indicate someone taking on too much, overdoing it or being a workaholic. You may be feeling that nothing you do pays off while others seem to get what they want easily");
}

function t58r(){
  alert("the Eight of Pentacles reversed - you are not focusing on what you want to achieve or aren’t putting the work in that needed to achieve your goals or that you are spreading yourself too thin which is leading to failure. Try to set yourself goals, prioritise what you really want to achieve and take tasks one at a time.");
}

function t59r(){
  alert("the Nine of Pentacles reversed - you may be working so hard in one area of life to the detriment of other areas. There is nothing wrong with focusing on your goals but remember not to let the rest of your life pass you by.");
}

function t60r(){
  alert("the Ten of Pentacles reversed - You may not be feeling very connected to your family at this time You may experience sudden or unexpected changes you may be feeling like you have lost everything when it appears. Remember, that it is often the most difficult or challenging situations that give us the opportunity to learn and grow");
}

function t61r(){
  alert("the Page of Pentacles reversed - lack of goals or lack of follow through may be holding you back from reaching your potential. Laziness, foolishness, stop procrastinating and go after what you want. The world will not just deliver your destiny to you. You have to ride out to meet it. If you want to achieve your dreams you have to seize every opportunity that comes your way  ");
}

function t62r(){
  alert("the Knight of Pentacles reversed -  it represents lack the ambition, drive or focus to reach your career goals. It can be an indication that you are not putting the work in or following through to achieve your long term ambitions");
}

function t63r(){
  alert("The queen of Pentacles reversed - represents a lack of social status, poverty, failure, dependence and being out of control. warns you that if you do not keep your feet on the ground you could lose everything you value.");
}

function t64r(){
  alert("the King of Pentacles reversed - represents losing your grip on things, not reaching your goals or not seeing things through to the end.");
}

function t65r(){
  alert("the Ace of Wands reversed - represents delays, setbacks and disappointing news You may be stopping yourself from progressing or be slow and hesitant about starting or trying anything new It can also represent creative blocks, wasted talent or potential and missed opportunities. You need to start taking the bull by the horns, what exactly are you waiting for?");
}

function t66r(){
  alert("the Two of Wands reversed - represents indecisiveness, fear of change and fear of the unknown It can represent staying put, deciding not to go, cancelled or delayed or choosing the safest option");
}

function t67r(){
  alert("the Three of Wands reversed - moving back home and homeland. It can indicate restriction, lack of progress, adventure or growth, failure and being unhappy with your choices or disappointed with the outcome of your situation. holding on the past and being haunted by it");
}

function t68r(){
  alert("the Four of Wands reversed - represents unhappy families,cancelled celebrations, surprises, parties, or events. It can signify leaving home, postponed or cancelled reunions, feeling like you don’t fit in, not being made to feel welcome and lack of support It tells you that you may experience self-doubt and that your self-esteem may be low");
}

function t69r(){
  alert("the Five of Wands reversed represents the end of rows, arguments, conflict, fighting and disagreements. It signifies ending struggles, finding common ground or solutions, reaching agreements, making peace");
}

function t70r(){
  alert("the Six of Wands reversed -  represents losing, failure, lack of achievement, disgrace, disloyalty, treachery and broken promises , It indicates that someone is being arrogant, egotistical, fame hungry");
}

function t71r(){
  alert("the Seven of Wands reversed - represents folding on your beliefs, quitting, giving up and giving in it can represent weakness, failing to protect or defend someone or something you care about and being exhausted, burnt-out or worn down");
}

function t72r(){
  alert("the Eight of Wands reversed - represents slowness, slow progress and lack of speed, movement or action It can signify late starts, bad timing, losing momentum, missed opportunities and unfinished business");
}

function t73r(){
  alert("the Nine of Wands reversed - represents refusing to compromise or give in, being stubborn,  It can represent not learning from past mistakes");
}

function t74r(){
  alert("the Ten of Wands reversed - represents having too much responsibility that's too heavy to bear , you feel like you're working hard but getting nowhere. It suggests that you are pushing yourself so far that you are on the brink of a collapse or a breakdown.");
}

function t75r(){
  alert("the Page of Wands reversed - represents bad or delayed news and set-backs. This may take the form of letters, phone calls or word of mouth it also suggests that you may be procrastinating and putting things off rather than taking action to make things happen. It can indicate a failure to launch a project, restricted thinking or not being able to find something you are passionate about");
}

function t76r(){
  alert("the Knight of Wands reversed indicates that things are not going as well as you expected and any ventures you have taken on are likely to experience delays or setback.  You may be lacking ambition, enthusiasm or self-discipline");
}

function t77r(){
  alert("the Queen of Wands reversed - can indicate that you may be feeling overwhelmed. You may have taken on far too many tasks You may be exhausted and heading for burn out , This card can also represent not taking charge of things");
}

function t78r(){
  alert("the King of Wands reversed - can indicate that you lack the energy, experience or enthusiasm to accomplish what you set out to achieve at this time. You are taking a back seat and are not being proactive in your life");
}