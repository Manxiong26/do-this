
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
   "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "user_email" VARCHAR (255) NOT NULL
);

CREATE TABLE "task" (
    "id" SERIAL PRIMARY KEY,
    "location_id" VARCHAR (100000),
    "name_task" VARCHAR (1000) NOT NULL,
    "task_description" VARCHAR (10000) NOT NULL,
    "task_img" VARCHAR (10000000)
);

CREATE TABLE "task_user" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user" NOT NULL,
    "task_id" INT REFERENCES "task" NOT NULL,
    "completed" BOOLEAN DEFAULT FALSE,
    "notes" VARCHAR (100000),
    "image" VARCHAR (10000)
);

-- Starter Data
INSERT INTO "task" ("location_id", "name_task", "task_description", "task_img" )
VALUES 
('1600 Plane Dr. St. Paul, MN 55106', 'Lake Phalen', 'go to Phalen Lake and walk around the whole lake', 'https://cloudfront.traillink.com/photos/lake-phalen-trail_190796_hero.jpg'),
('3016 E Lake St. Minneapolis, MN 55406', 'Urban Forage Winery and Cider House', 'Go try some wine tasting', 'http://growlermag-media.s3.amazonaws.com/wp-content/uploads/20190828132412/Y5A5829.jpg'),
('Superior Hiking Trail, Grand Marias, MN 55604', 'Devils Kettle', 'Lets check out the mysterious hole where the waterfall falls down to', 'https://superiorhiking.com/wp-content/uploads/2009/07/Devils_Kettle_Falls-1080x587.jpg'),
('15066 Kathio State Park Rd, Onamia, MN 56359', 'Mille Lacs Kathio State Park', 'Known for their really awesome fishing spots, lets go fishing!', 'https://www.exploreminnesota.com/sites/default/files/styles/share_image/public/2019-10/fall-trees-from-above-mille-lacs-kathio-state-park.jpg?h=af2b097d&itok=_hqw3PGq'),
('3201 Wayzata Blvd, Minneapolis, MN 55416', 'Minneapolis Chain of Lake', 'Go on this wonderful trail and start of at Brownie Lake and continue through Cedar Lake, Lake of the Isles, Bde Maka Ska, and Lake Harriet ', 'https://i.redd.it/nsbop3gaqu031.jpg'),
('2538 Birch Point Rd, Tower, MN 55790', 'Lake Vermillion', 'Camping time!! Let’s go camping and take in the beautiful scenery Lake Vermillion has to offer!', 'https://cdn.elebase.io/bef2a808-b68a-474c-81da-ac5c34b760dd/509ceb12-9f1c-435b-b286-497b6dfd1753-hoc90a2ae44b19b1d211.jpg?w=680&h=382&fit=crop&rot=auto&dpr=2&q=75'),
('1515 Riverside Dr SE, St Cloud, MN 56304', 'Munsinger Gardens', 'There is a beautiful Garden park located next to the Mississipi River in St. Cloud, MN. Lets go enjoy this Munsinger Gardens and dont forget to stop by the Clemens portion to see the rose Garden', 'https://thriftyminnesota.com/wp-content/uploads/2015/07/munsinger_gardens.jpg'),
('400 N. Hiawatha Ave Pipestone, Minnesota 56164', 'Keepers of the Sacred Tradition of Pipemakers', 'Time to go do some historical learning. Let’s go learn about the Sacred tradition of the Native American pipemakers.', 'https://www.pipekeepers.org/uploads/3/1/3/0/31306445/______8343885.gif'),
('4801 S Minnehaha Drive Minneapolis, MN 55417', 'Minnehaha Regional Park', 'Lets go check out this beautiful water right in our Twin Cities, in Minneapolis. ', 'https://www.exploreminnesota.com/sites/default/files/listing_images/7b5e7cb018e598d6afdd0f74247b18baac3f2774_37.jpg'),
('1301 Theodore Wirth Pkwy Minneapolis, MN 55422', 'Theodore Wirth Regional Park', 'So many wonderful trails with beginner, intermediate and advanced trails for all types of hikers.', 'https://www.arcgis.com/sharing/rest/content/items/81f70a86c65941378850ca37361e7ad7/info/thumbnail/ago_downloaded.jpg/?w=400'),
('4825 Minnehaha Ave Minneapolis, MN 55417', 'Sea Salt Eatery','Time to treat yourself for some yummy fresh seafood wine and beer. Its a first come first serve basis.', 'https://s3-media0.fl.yelpcdn.com/bphoto/sYv9aQ0Kpr8CpPIaUEGmUA/l.jpg'),
('29836 St Croix Trail Franconia, MN 55074', 'Franconia Sculpture Park', 'Nothing is more fun and exciting than checking out a park full of awesome Sculpture.', 'https://growlermag-media.s3.amazonaws.com/G33_craft-culture_708x380-1.jpg'),
('20430 Johnson Memorial Dr Jordan, MN 55352 ', 'Minnesota’s Largest Candy Store', 'You cant say you’ve been to or lived in Minnesota without checking out Minnesotas largest candy store!','https://tcagenda.com/wp-content/uploads/2018/10/34963502_2137068872982910_9189692750155481088_o.jpg'),
('101 3rd Avenue NE Austin, MN 55912 ', 'SPAM', 'Are you a SPAM lover? Well, time to go check out the SPAM museum!', 'https://www.hormelfoods.com/wp-content/uploads/Newsroom_2018_SPAM-Museum-Indoors.jpg'),
('Superior National Forest 8901 Grand Ave Place Duluth, MN 55808', 'Boundary waters canoe area wilderness', 'With over 1,200 miles of canoe routes, nearly 2,200 designated campsites, and more than 1,000 lakes and streams waiting, the BWCAW draws thousands of visitors each year.', 'https://www.exploreminnesota.com/sites/default/files/listing_images/24c4c0d0712938207aa50f0d46d2b189112458ff_38.jpg'),
('3500 Cedar Ave S Minneapolis, MN 55407 ', 'Matt’s Bar', 'Ever heard of the Famous Juicy Lucy? Well, if you havent, you should go try the minnesota born hamburger Juicy Lucy at one of the bars that claims to have invented the delicious burger!', 'https://www.exploreminnesota.com/sites/default/files/listing_images/605ceb91c28bad5946a6a4dc9b91a0db5d475555_36.jpg'),
('5800 Cedar Ave S Minneapolis, MN 55417 ', '5-8 Club', 'Ever heard of the Famous Juicy Lucy? Well, if you havent, you should go try the minnesota born hamburger Juicy Lucy at one of the bars that claims to have invented the delicious burger!', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/5%C2%B78ClubMPLS.jpg/1200px-5%C2%B78ClubMPLS.jpg'),
('2400 Mystic Lake Blvd NW, Prior Lake, MN 55372', 'Mystic Lake', 'Do you like to do some gambling? Maybe you just Love food! Well mystic lake have both!', 'https://www.bestuscasinos.org/wp-content/uploads/2021/02/Mystic-Lake-Casino-Hotel-is-Another-Fine-Option.jpg'),
('507 1st Ave NE, Minneapolis, MN 55413', 'The Herbivorous Butcher', 'Are you a vegetarian? Or maybe just looking for a yummy vegetarian place to try out! Well check out this amazing place. Guy Fieri even filmed it!', 'https://images.happycow.net/venues/1024/48/17/hcmp48170_669031.jpeg'),
('1217 2nd St SW, Rochester, MN 55902', 'Tonic Juice Bar', 'Juice is great but how far are you willing to try different kinds of juice? If you’re feeling adventurous go check out the Tonic Juice Bar!', 'https://media-cdn.tripadvisor.com/media/photo-s/06/cc/f4/f3/juice-bar.jpg'),
('448 University Ave W, St Paul, MN 55103', 'Cheng Heng', 'Do you love asian cuisine but also want the option of eating a vegetarian version of those meals! Definitely should go try Cheng Heng a cambodian restaurant and has also won awards from The City Pages, Minneapolis St. Paul Magazine! ', 'https://myannoyingopinions.files.wordpress.com/2018/01/cheng-heng.jpg'),
('169 Victoria St, St Paul, MN 55104', 'J. Selbys', 'Serves up Delicious 100% plant based food, definitely a must try for vegans and vegetarians! ', 'https://images.happycow.net/venues/1024/90/02/hcmp90026_484938.jpeg'),
('102 2nd St S, Stillwater, MN 55082', 'Domacin Restaurant, Wine Bar & Wine Shop', 'Lets go on a nice date and try some wine, being next to the St. Croix River!', 'http://cdn.minnesotamonthly.com/wp-content/uploads/sites/85/2017/07/img_2017-08_Domacin_Captains-Private-Room_G.jpg'),
('2115 W 21st St, Minneapolis, MN 55405', 'The Kenwood Restaurant', 'Has it been a long time since you’ve gone to  a fancy dinner date? Chef Don Saunders has a reputation as one of the Midwests brightest culinary lights, and it comes through in his food, which is rich, beautiful and deftly balanced', 'https://mspmag.com/downloads/14821/download/kenwood_640.jpg?cb=f57bf62f20e675c8714e50396a094944'),
('300 Beltrami Ave NW, Bemidji, MN 56601', 'Tutto Bene', 'If youre in the area, load up on pasta or the pescato del giorno (fish of the day) at one of Minnesotas hidden gems.', 'https://storage.googleapis.com/tock-public-assets/imagesprod/user_uploaded_images_v1/82a2b3db6b190f81ec0552916c4fbd99.jpg'),
('141 E Chapman St, Ely, MN 55731', 'Organic Roots', 'Are you all about organic foods? Well going to Organic Roots might just be the place for you! All their meals are made with organic and fresh seasonal ingredients!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaNeu2KnvD-_7cd0HZfVojXk_0bqH-TNDinQ&usqp=CAU'),
('3746 Sunset Dr, Spring Park, MN 55384', 'Lord Fletchers Old Lake Lodge', 'Looking for a romantic place to go and wine and dine? Go checkout Lord Fletchers Old Lake Lodge, and take in the beautiful view of Lake Minnetonka as well!', 'https://eventective-media.azureedge.net/1874314_lg.jpg'),
('345 W Kellogg Blvd, St Paul, MN 55102', 'Minnesota History Center', 'Do you enjoy history, Minnesota History Center is known for lively interactive environments, the History Center invites visitors of all ages to climb into a grain elevator, ride a boxcar, visit a sod house, prospect in an iron ore mine, and explore many other scenes and objects.', 'https://www.planetware.com/wpimages/2018/08/minnesota-st-paul-attractions-minnesota-history-center.jpg'),
('821 S Marquette Ave, Minneapolis, MN 55402', 'Foshay Museum and Observation Deck', 'Visit the museum to uncover the remarkable story behind this unique skyscraper and its eccentric creator. And view the city from the outdoor Observation Deck on the 31st floor.', 'https://assets.simpleviewinc.com/simpleview/image/upload/crm/minneapolisnwmn/69ebad4f-9db5-40eb-9567-af0af1759739_95ad459f-5056-a36f-2351b9b38fec6568.jpg'),
('704 S 2nd St Minneapolis, MN 55401 ', 'Mill City Museum', 'Here, visitors of all ages learn about the intertwined histories of the flour industry, the river, and the city of Minneapolis.', 'https://www.mnhs.org/sites/default/files/-paragraphs/image/edit/mcm_700x470_directions.jpg'),
('1860 Schell Rd New Ulm, MN 56073 ', 'August Schell Brewery', 'Schell is the second oldest family-owned brewery in the country. Visit the brewery grounds and see deer, roaming peacocks, beautiful gardens, and enjoy a beer in the Biergarten during the summer season.', 'https://schells-18df1.kxcdn.com/wp-content/uploads/2018/06/2015-Starkeller-810x375.jpg'),
('2400 3rd Ave S, Minneapolis, MN 55404', 'Minneapolis Institute of Art', 'If you love Art, go check out MIA! Home to more than 90,000 works of art representing 5,000 years of world history, Mia is one of the largest art museums in the United States.', 'https://i0.wp.com/www.hisour.com/wp-content/uploads/2017/03/Minneapolis-Institute-of-Art.jpg?fit=1054%2C640&ssl=1'),
('5702 MN-61, Silver Bay, MN 55614', 'Tettegouche State Park', 'This is a hikers paradise with miles of trails that overlook the Sawtooth Mountains and wind down to inland lakes accessible only by foot.', 'https://mapio.net/images-p/28931203.jpg'),
('9393 E, MN-61, Grand Portage, MN 55605', 'Grand Portage State Park', 'This is the only park in the nation that is managed in partnership with a local Native American band. The result is access for everyone to one of the area’s most impressive natural features.', 'https://www.exploreminnesota.com/sites/default/files/styles/share_image/public/listing_images/1eaabe6cdf3b7dd7b58f399c63cc5f4b5fc7ce24_38.jpg?itok=Sd5iP3wj'),
('725 Vineland Pl, Minneapolis, MN 55403', 'Walker Art Center', 'Enjoy a sculpture garden and Art Exhibts and Documentaries!', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh3qwlP_AR8puc5vmwIn-ka3dJlhnNoEncmCUd6BKKUSoHC8AXZUCV6cGuzT0sZVj2IZ0&usqp=CAU'),
('202 1st Ave N PO Box 157 Moorhead, MN 56560 ', 'Historical & Cultural Society of Clay County', 'Hjemkomst Center museum houses and interprets the Viking ship replica Hjemkomst & its historic 1982 voyage to Norway', 'https://www.exploreminnesota.com/sites/default/files/listing_images/4d968b05eba4c7568c31d4d92cbe14bd554d865e_17.jpg'),
('36 W 7th St St Paul, MN 55102 ', 'Mickeys Diner', 'It is unique in that it is one of the first diners to be built in the Art Deco style.', 'https://www.exploreminnesota.com/sites/default/files/listing_images/058975f9b0c5a1bbd2be144025a5d60f38b817cf_36.jpg');