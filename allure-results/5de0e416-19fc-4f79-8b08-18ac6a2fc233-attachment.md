# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dataDriven2.spec.js >> Validating Search Functionality shoes
- Location: tests\dataDriven2.spec.js:10:9

# Error details

```
ReferenceError: verifysearch is not defined
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation "Shortcuts menu" [ref=e3]:
    - heading "Skip to" [level=2] [ref=e4]
    - list "Skip to" [ref=e5]:
      - listitem [ref=e6]:
        - link "main content" [ref=e7] [cursor=pointer]:
          - /url: "#skippedLink"
          - text: Main content
    - separator [ref=e8]
  - banner [ref=e9]:
    - navigation "Primary" [ref=e10]:
      - generic [ref=e11]:
        - generic [ref=e12]:
          - link "Amazon.in" [ref=e14] [cursor=pointer]:
            - /url: /ref=nav_logo
            - generic: .in
          - button "Delivering to Chennai 600009 Update location" [ref=e17] [cursor=pointer]:
            - generic [ref=e19]:
              - generic [ref=e20]: Delivering to Chennai 600009
              - generic [ref=e21]: Update location
        - search [ref=e24]:
          - generic [ref=e27]:
            - generic [ref=e29]: All
            - combobox "Select the department you want to search in" [ref=e31] [cursor=pointer]:
              - option "All Categories" [selected]
              - option "Alexa Skills"
              - option "Amazon Devices"
              - option "Amazon Fashion"
              - option "Amazon Fresh"
              - option "Amazon Fresh Meat"
              - option "Amazon Pharmacy"
              - option "Appliances"
              - option "Apps & Games"
              - option "Audible Audiobooks"
              - option "Baby"
              - option "Beauty"
              - option "Books"
              - option "Car & Motorbike"
              - option "Clothing & Accessories"
              - option "Collectibles"
              - option "Computers & Accessories"
              - option "Deals"
              - option "Electronics"
              - option "Furniture"
              - option "Garden & Outdoors"
              - option "Gift Cards"
              - option "Grocery & Gourmet Foods"
              - option "Health & Personal Care"
              - option "Home & Kitchen"
              - option "Industrial & Scientific"
              - option "Jewellery"
              - option "Kindle Store"
              - option "Luggage & Bags"
              - option "Luxury Beauty"
              - option "Movies & TV Shows"
              - option "MP3 Music"
              - option "Music"
              - option "Musical Instruments"
              - option "Office Products"
              - option "Pet Supplies"
              - option "Prime Video"
              - option "Shoes & Handbags"
              - option "Software"
              - option "Sports, Fitness & Outdoors"
              - option "Subscribe & Save"
              - option "Tools & Home Improvement"
              - option "Toys & Games"
              - option "Under ₹500"
              - option "Video Games"
              - option "Watches"
          - searchbox "Search Amazon.in" [ref=e34]: shoes
          - generic "Go" [ref=e37] [cursor=pointer]:
            - button "Go" [ref=e38]
        - generic [ref=e40]:
          - link "Choose a language for shopping in Amazon India. The current selection is English (EN)." [ref=e42] [cursor=pointer]:
            - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
            - generic [ref=e45]:
              - img "India" [ref=e46]
              - generic [ref=e47]: EN
          - link "Hello, sign in Account & Lists" [ref=e49] [cursor=pointer]:
            - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fs%2Fref%3Dnb_sb_noss%2F%3F_encoding%3DUTF8%26field-keywords%3Dshoes%26url%3Dsearch-alias%253Daps%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
            - generic [ref=e51]: Hello, sign in
            - generic [ref=e52]: Account & Lists
          - link "Returns & Orders" [ref=e53] [cursor=pointer]:
            - /url: /gp/css/order-history?ref_=nav_orders_first
            - generic [ref=e54]: Returns
            - generic [ref=e55]: "& Orders"
          - link "0 items in cart" [ref=e56] [cursor=pointer]:
            - /url: /gp/cart/view.html?ref_=nav_cart
            - generic [ref=e58]: "0"
            - generic [ref=e61]: Cart
      - generic [ref=e62]:
        - button "Open All Categories Menu" [ref=e64] [cursor=pointer]:
          - generic [ref=e66]: All
        - list [ref=e70]:
          - listitem [ref=e71]:
            - link "Fresh" [ref=e73] [cursor=pointer]:
              - /url: /fresh?ref_=nav_cs_grocery
          - listitem [ref=e74]:
            - link "Prime Video" [ref=e76] [cursor=pointer]:
              - /url: https://www.primevideo.com/offers/nonprimehomepage/ref_=nav_dvm_crs_in_s_gw_bt_dk_p_hamburgr?ref_=avod_desktop_topnav
          - listitem [ref=e77]:
            - link "Sell" [ref=e79] [cursor=pointer]:
              - /url: /b/32702023031?node=32702023031&ld=AZINSOANavDesktop_T3&ref_=nav_cs_sell_T3
          - listitem [ref=e80]:
            - link "Bestsellers" [ref=e82] [cursor=pointer]:
              - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
          - listitem [ref=e83]:
            - link "Today's Deals" [ref=e85] [cursor=pointer]:
              - /url: /deals?ref_=nav_cs_gb
          - listitem [ref=e86]:
            - link "Mobiles" [ref=e88] [cursor=pointer]:
              - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
          - listitem [ref=e89]:
            - link "New Releases" [ref=e91] [cursor=pointer]:
              - /url: /gp/new-releases/?ref_=nav_cs_newreleases
          - listitem [ref=e92]:
            - link "Prime" [ref=e94] [cursor=pointer]:
              - /url: /prime?ref_=nav_cs_primelink_nonmember
          - listitem [ref=e95]:
            - link "Amazon Pay" [ref=e97] [cursor=pointer]:
              - /url: /gp/sva/dashboard?ref_=nav_cs_apay
          - listitem [ref=e98]:
            - link "Electronics" [ref=e100] [cursor=pointer]:
              - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
          - listitem [ref=e101]:
            - link "Customer Service" [ref=e103] [cursor=pointer]:
              - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
          - listitem [ref=e104]:
            - link "Home & Kitchen" [ref=e106] [cursor=pointer]:
              - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
          - listitem [ref=e107]:
            - link "Fashion" [ref=e109] [cursor=pointer]:
              - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
          - listitem [ref=e110]:
            - link "Computers" [ref=e112] [cursor=pointer]:
              - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
          - listitem [ref=e113]:
            - link "Toys & Games" [ref=e115] [cursor=pointer]:
              - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
          - listitem [ref=e116]:
            - link "Car & Motorbike" [ref=e118] [cursor=pointer]:
              - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
          - listitem [ref=e119]:
            - link "Sports, Fitness & Outdoors" [ref=e121] [cursor=pointer]:
              - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
          - listitem [ref=e122]:
            - link "Home Improvement" [ref=e124] [cursor=pointer]:
              - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
          - listitem [ref=e125]:
            - link "Gift Cards" [ref=e127] [cursor=pointer]:
              - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
          - listitem [ref=e128]:
            - link "Pet Supplies" [ref=e130] [cursor=pointer]:
              - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
          - listitem [ref=e131]:
            - link "Beauty & Personal Care" [ref=e133] [cursor=pointer]:
              - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
          - listitem [ref=e134]:
            - link "Video Games" [ref=e136] [cursor=pointer]:
              - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
          - listitem [ref=e137]:
            - link "Grocery & Gourmet Foods" [ref=e139] [cursor=pointer]:
              - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
          - listitem [ref=e140]:
            - link "Custom Products" [ref=e142] [cursor=pointer]:
              - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
          - listitem [ref=e143]:
            - link "Baby" [ref=e145] [cursor=pointer]:
              - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
          - listitem [ref=e146]:
            - link "Health, Household & Personal Care" [ref=e148] [cursor=pointer]:
              - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
          - listitem [ref=e149]:
            - link "AmazonBasics" [ref=e151] [cursor=pointer]:
              - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
          - listitem [ref=e152]:
            - link "Audible" [ref=e154] [cursor=pointer]:
              - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
          - listitem [ref=e155]:
            - link "Subscribe & Save" [ref=e157] [cursor=pointer]:
              - /url: /auto-deliveries/landing?ref_=nav_cs_sns
          - listitem [ref=e158]:
            - link "Kindle eBooks" [ref=e160] [cursor=pointer]:
              - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
          - listitem [ref=e161]:
            - link "Books" [ref=e163] [cursor=pointer]:
              - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
          - listitem [ref=e164]:
            - link "Flights" [ref=e166] [cursor=pointer]:
              - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
        - link "AugART26_Event" [ref=e170] [cursor=pointer]:
          - /url: /events/greatfreedomsale/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=332e8815-c7da-4d47-a8e3-fa158bc13608&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=A7SYNPZC624E3B7P6Z56
          - img "AugART26_Event" [ref=e171]
  - heading "1-48 of over 100,000 results for \"shoes\" Featured" [level=1] [ref=e177]:
    - generic [ref=e178]:
      - heading "1-48 of over 100,000 results for \"shoes\"" [level=2] [ref=e183]
      - generic [ref=e188]:
        - generic [ref=e189]: "Sort by:"
        - combobox "Sort by:" [ref=e190]:
          - option "Featured" [selected]
          - 'option "Price: Low to High"'
          - 'option "Price: High to Low"'
          - option "Avg. Customer Review"
          - option "Newest Arrivals"
          - option "Best Sellers"
        - generic [ref=e193] [cursor=pointer]: Sort by:Featured
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test"
  2  | 
  3  | const {DataDriven2} = require("../pages/readDatafromtestData2")
  4  | 
  5  |  const {amazon} = require("../testData/testData2.json")
  6  | 
  7  | 
  8  |  amazon.forEach((data)=> {
  9  | 
  10 |     test(`Validating Search Functionality ${data.products}` , async ({page}) => {
  11 | 
  12 |         let search = new DataDriven2(page)
  13 | 
  14 |         await search.navigation(process.env.BASE_URL2)
  15 |         await search.searchproduct(data.products)
  16 | 
> 17 |         await verifysearch(data.products)
     |         ^ ReferenceError: verifysearch is not defined
  18 | 
  19 | 
  20 | 
  21 | 
  22 | 
  23 | 
  24 | 
  25 | 
  26 | 
  27 | 
  28 |     })
  29 | 
  30 | 
  31 |  })
  32 | 
  33 | 
  34 | 
  35 | 
```