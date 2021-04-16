import { Injectable } from "@angular/core";
import { ProductModel } from "../Models/Product";

@Injectable({ providedIn: 'root' })
export class ProductsService
{
    Products: Array<ProductModel>;

    constructor()
    {
      this.Products = new Array<ProductModel>();

      this.LoadProducts();
    }

    LoadProducts(): void
    {
        let prod = new ProductModel();
        prod.Id = 1;
        prod.Name = 'Halo The Master Chief Collection';
        prod.Price = 60;
        prod.Description = 'Chief returns to battle an ancient evil bent on vengeance and annihilation. Shipwrecked on a mysterious world, faced with new enemies and deadly technology, the universe will never be the same. Enlist aboard the Infinity to experience Halo’s original multiplayer and Spartan Ops - innovative episodic fiction-based co-op missions.';
        prod.ThumbnailUrl = '../assets/Covers/xo_halothemasterchiefcollection.jpg';
        prod.ProducCategoryId = 1;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 2;
        prod.Name = 'Bloodborne';
        prod.Price = 60;
        prod.Description = 'Hunt your nightmares as you search for answers in the ancient city of Yharnam, now cursed with a strange endemic illness spreading through the streets like wildfire. Danger, death and madness lurk around every corner of this dark and horrific world, and you must discover its darkest secrets in order to survive.';
        prod.ThumbnailUrl = '../assets/Covers/ps4_bloodborne.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 3;
        prod.Name = 'God of War 3 Remastered';
        prod.Price = 60;
        prod.Description = 'Originally developed by Sony Computer Entertainment’s Santa Monica Studio exclusively for the PLAYSTATION®3 system, God of War® III has been remastered for the PLAYSTATION®4 system and gameplay supports 1080p at 60fps. God of War III Remastered will bring epic battles to life with stunning graphics and an elaborate plot that puts Kratos at the center of carnage and destruction as he seeks revenge against the Gods who betrayed him.';
        prod.ThumbnailUrl = '../assets/Covers/ps4_godofwariiiremastred.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 4;
        prod.Name = 'Killzone Shadow Fall';
        prod.Price = 60;
        prod.Description = 'Following the Petrusite detonation that rendered the planet Helghan uninhabitable in Killzone 3 (an event now referred to as "The Terracide"), the ISA grants refuge to the Helghast survivors on the planet Vekta, allowing them to colonize half the planet, with that half of the planet dubbed New Helghan. A massive security fortification called The Wall is constructed to separate the two civilizations from each other, due to the resentment they bear over the previous war. Both the Vektans and Helghast routinely perform covert operations against each other in the hope of finishing the war each claims the other started. The majority of the game takes place in Vekta City, home to the Vektan Security Agency (VSA) headquarters, as well as a prison in New Helghan, and Helghan, the original homeworld of the Helghast, now dead and shattered due to the Petrusite detonation. ';
        prod.ThumbnailUrl = '../assets/Covers/ps4_killzoneshadowfall.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 5;
        prod.Name = 'The Last of Us Remastered';
        prod.Price = 60;
        prod.Description = '20 years after a pandemic has radically changed known civilization, infected humans run wild and survivors are killing each other for food, weapons; whatever they can get their hands on. Joel, a violent survivor, is hired to smuggle a 14 year-old girl, Ellie, out of an oppressive military quarantine zone, but what starts as a small job soon transforms into a brutal journey across the U.S.';
        prod.ThumbnailUrl = '../assets/Covers/ps4_lastofusremastered.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 6;
        prod.Name = 'Teenage Mutant Ninja Turtles Mutants in Manhattan';
        prod.Price = 60;
        prod.Description = 'Battle alongside your brothers through the sewers, subways, and streets of NYC to take down shredder and Krangs evil organization, foot by foot. Unleash custom combat skills and powerful team combos to save Manhattan from the overwhelming dark forces growing in the shadows. ';
        prod.ThumbnailUrl = '../assets/Covers/ps4_teenagemutantninjaturtlesmutantsinmanhattan.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 7;
        prod.Name = 'Uncharted 4: A Thiefs End';
        prod.Price = 60;
        prod.Description = 'Set three years after the events of Uncharted 3: Drake’s Deception, Nathan Drake has presumably left the world of fortune-hunting behind. However, it doesn’t take long for fate to come calling when Drake’s brother, Sam, resurfaces seeking his help to save his own life and offering an adventure Drake can’t resist.';
        prod.ThumbnailUrl = '../assets/Covers/ps4_uncharted4ahiefsend.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 8;
        prod.Name = 'The Legend of Zelda: Link’s Awakening';
        prod.Price = 60;
        prod.Description = 'As Link, you awaken in a strange land away from Hyrule, where animals talk and monsters roam. To uncover the truth behind your whereabouts and rouse the legendary Wind Fish, explore Koholint Island and all its trap-ridden dungeons, reimagined in stunning detail for this new release of one of the most beloved The Legend of Zelda games. Along the way, you’ll meet a hilarious assortment of charming characters to which you’ll never want to say goodbye.';
        prod.ThumbnailUrl = '../assets/Covers/switch_legendofzeldalinksawakening.jpg';
        prod.ProducCategoryId = 3;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 9;
        prod.Name = 'Mario Kart 8 Deluxe';
        prod.Price = 60;
        prod.Description = 'Hit the road with the definitive version of Mario Kart 8 and play anytime, anywhere! Race your friends or battle them in a revised battle mode on new and returning battle courses. Play locally in up to 4-player multiplayer in 1080p while playing in TV Mode. Every track from the Wii U version, including DLC, makes a glorious return. Plus, the Inklings appear as all-new guest characters, along with returning favorites, such as King Boo, Dry Bones, and Bowser Jr.!';
        prod.ThumbnailUrl = '../assets/Covers/switch_mariokart8deluxe.jpg';
        prod.ProducCategoryId = 3;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 10;
        prod.Name = 'Ni no Kuni: Wrath of the White Witch';
        prod.Price = 60;
        prod.Description = 'Journey back to the other world in Ni no Kuni: Wrath of the White Witch. LEVEL-5’s classic tale comes to Nintendo Switch™ for the first time. Join Oliver as he embarks on an adventure through a world inhabited by new friends and ferocious foes alike in the hopes of bringing back his mother after a tragic incident. With a copy of the Wizard’s Companion in his hand and his trusty friend Drippy by his side, he will travel across this rich fantasy world to tame familiars, take on enemies, and overcome the countless challenges that stand between him and his mother’s salvation.';
        prod.ThumbnailUrl = '../assets/Covers/switch_ninokuniwrathofthewhitewitch.jpg';
        prod.ProducCategoryId = 3;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 11;
        prod.Name = 'The Legend of Zelda: Breath of the Wild';
        prod.Price = 60;
        prod.Description = 'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule in this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.';
        prod.ThumbnailUrl = '../assets/Covers/switch_zeldabreathofthewild.jpg';
        prod.ProducCategoryId = 3;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 12;
        prod.Name = 'DmC Devil May Cry: Definitive Edition';
        prod.Price = 60;
        prod.Description = 'The definitive edition of this critically-acclaimed action game arrives with enhanced 1080p graphics at 60fps, new features and all the original DLC included. Chain together stylish combos with up to eight unique weapons.  Traverse the demonic world of Limbo as you join Dante and Vergil in the legendary rebirth of the Devil May Cry franchise.';
        prod.ThumbnailUrl = '../assets/Covers/xo_dmcdevilmaycrydefinitiveedition.jpg';
        prod.ProducCategoryId = 1;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 13;
        prod.Name = 'Doom';
        prod.Price = 60;
        prod.Description = 'DOOM returns as a brutally fun and challenging modern-day shooter experience. Relentless demons, impossibly destructive guns, and fast, fluid movement provide the foundation for intense, first-person combat – whether you’re obliterating demon hordes through the depths of Hell in the single-player campaign, or competing against your friends in numerous multiplayer modes. Combine your arsenal of futuristic and iconic guns, upgrades, movement and an advanced melee system to knock-down, slash, stomp, crush, and blow apart demons in creative and violent ways. Expand your gameplay experience using the DOOM SnapMap game editor to easily create, play, and share your content with the world.';
        prod.ThumbnailUrl = '../assets/Covers/xo_doom.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 14;
        prod.Name = 'Recore';
        prod.Price = 60;
        prod.Description = 'As one of the last remaining humans, forge friendships with courageous robotic companions and lead them on an epic adventure through a mysterious dynamic world.';
        prod.ThumbnailUrl = '../assets/Covers/xo_recore.jpg';
        prod.ProducCategoryId = 1;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 15;
        prod.Name = 'Destiny 2';
        prod.Price = 60;
        prod.Description = 'Dive into the free-to-play world of Destiny 2 to experience responsive FPS combat, explore the mysteries of our solar system, customize your guardian with unique gear, and unleash elemental abilities against powerful enemies.';
        prod.ThumbnailUrl = '../assets/Covers/xone_destiny2.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 16;
        prod.Name = 'Gears of War 4';
        prod.Price = 60;
        prod.Description = 'A new saga begins for one of the most acclaimed video game franchises in history. After narrowly escaping an attack on their village, JD Fenix and his friends, Kait and Del, must rescue the ones they love and discover the source of a monstrous new enemy.';
        prod.ThumbnailUrl = '../assets/Covers/xone_gearsofwar4.jpg';
        prod.ProducCategoryId = 1;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 17;
        prod.Name = 'Mega Man Legacy Collection 2';
        prod.Price = 60;
        prod.Description = 'The Blue Bomber is back in this second collection of classic Capcom titles! Featuring faithful reproductions of Mega Man 7, 8, 9, & 10, this collection is bursting with additional content, from time trials and remix challenges to a music player and an extensive gallery of rare illustrations.';
        prod.ThumbnailUrl = '../assets/Covers/xone_megamanlegacycollection2.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 18;
        prod.Name = 'Metro Exodus';
        prod.Price = 60;
        prod.Description = 'Flee the shattered ruins of the Moscow Metro and embark on an epic, continent-spanning journey across the post-apocalyptic Russian wilderness. Explore vast, non-linear levels, lose yourself in an immersive, sandbox survival experience, and follow a thrilling story-line that spans an entire year in the greatest Metro adventure yet.';
        prod.ThumbnailUrl = '../assets/Covers/xone_metroexodus.jpg';
        prod.ProducCategoryId = 1;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 19;
        prod.Name = 'Quantum Break';
        prod.Price = 60;
        prod.Description = 'A blockbuster game with time-amplified action and a suspenseful storyline brought to life in a way never done before by fusing gameplay and a gripping live action show. Time itself becomes fractured in a time travel experiment, Jack Joyce fights the secretive Monarch Solutions to put things right before it’s too late. The actions you take and choices you make shape your experience in the show, creating a new and unique entertainment experience.';
        prod.ThumbnailUrl = '../assets/Covers/xone_quantumbreak.jpg';
        prod.ProducCategoryId = 1;

        this.Products.push(prod);

        prod = new ProductModel();
        prod.Id = 20;
        prod.Name = 'RESIDENT EVIL 7 biohazard';
        prod.Price = 60;
        prod.Description = 'Fear and isolation seep through the walls of an abandoned southern farmhouse. "7" marks a new beginning for survival horror with the “Isolated View” of the visceral new first-person perspective. Powered by the RE Engine, horror reaches incredible heights of immersion as players enter a terrifyingly new world of fear as they fight to survive.';
        prod.ThumbnailUrl = '../assets/Covers/xone_residentevil7biohazard.jpg';
        prod.ProducCategoryId = 2;

        this.Products.push(prod);
    }

    GetById(id: number): ProductModel
    {
      const prod = this.Products.find(p => p.Id == id);

      if(prod)
      {
        return prod;
      }
      return null;
    }

    GetByName(name: string): Array<ProductModel>
    {
      const result = this.Products.filter(p => p.Name.toLowerCase().includes(name.toLowerCase()));

      if(result)
      {
        return result;
      }
      return null;
    }

    GetByCategory(categoryId: number): Array<ProductModel>
    {
      const result = this.Products.filter(p => p.ProducCategoryId == categoryId);

      if(result)
      {
        return result;
      }
      return null;
    }
}
