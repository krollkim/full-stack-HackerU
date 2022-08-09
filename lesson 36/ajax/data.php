<?
    $arr = [
      [
        "id"=> 1,
        "firstName"=> "Addie",
        "lastName"=> "Pitkethly",
        "email"=> "apitkethly0@ow.ly",
        "gender"=> "Female",
        "ipAddress"=> "11.81.109.218"
      ], [
        "id"=> 2,
        "firstName"=> "Nevil",
        "lastName"=> "Pinilla",
        "email"=> "npinilla1@lycos.com",
        "gender"=> "Non-binary",
        "ipAddress"=> "240.173.224.82"
      ], [
        "id"=> 3,
        "firstName"=> "Brooke",
        "lastName"=> "Stiffell",
        "email"=> "bstiffell2@arstechnica.com",
        "gender"=> "Genderfluid",
        "ipAddress"=> "58.177.63.16"
      ], [
        "id"=> 4,
        "firstName"=> "Minnnie",
        "lastName"=> "Twiddle",
        "email"=> "mtwiddle3@earthlink.net",
        "gender"=> "Female",
        "ipAddress"=> "132.8.148.240"
      ], [
        "id"=> 5,
        "firstName"=> "Anne",
        "lastName"=> "Greenfield",
        "email"=> "agreenfield4@businessinsider.com",
        "gender"=> "Female",
        "ipAddress"=> "23.211.90.192"
      ], [
        "id"=> 6,
        "firstName"=> "Renato",
        "lastName"=> "Tharme",
        "email"=> "rtharme5@youku.com",
        "gender"=> "Male",
        "ipAddress"=> "21.245.169.16"
      ], [
        "id"=> 7,
        "firstName"=> "Andrew",
        "lastName"=> "Mabbott",
        "email"=> "amabbott6@weather.com",
        "gender"=> "Male",
        "ipAddress"=> "240.176.76.56"
      ], [
        "id"=> 8,
        "firstName"=> "Elayne",
        "lastName"=> "Guilfoyle",
        "email"=> "eguilfoyle7@g.co",
        "gender"=> "Female",
        "ipAddress"=> "185.129.51.74"
      ], [
        "id"=> 9,
        "firstName"=> "Nathalia",
        "lastName"=> "Wozencroft",
        "email"=> "nwozencroft8@people.com.cn",
        "gender"=> "Female",
        "ipAddress"=> "168.69.219.79"
      ], [
        "id"=> 10,
        "firstName"=> "Eachelle",
        "lastName"=> "Ashforth",
        "email"=> "eashforth9@discuz.net",
        "gender"=> "Female",
        "ipAddress"=> "48.153.26.85"
      ], [
        "id"=> 11,
        "firstName"=> "Darrell",
        "lastName"=> "Kleinstern",
        "email"=> "dkleinsterna@smugmug.com",
        "gender"=> "Male",
        "ipAddress"=> "189.6.8.122"
      ], [
        "id"=> 12,
        "firstName"=> "Teena",
        "lastName"=> "Pringer",
        "email"=> "tpringerb@google.ca",
        "gender"=> "Female",
        "ipAddress"=> "19.25.147.207"
      ], [
        "id"=> 13,
        "firstName"=> "Brett",
        "lastName"=> "Dabling",
        "email"=> "bdablingc@surveymonkey.com",
        "gender"=> "Male",
        "ipAddress"=> "116.156.61.48"
      ], [
        "id"=> 14,
        "firstName"=> "Mathian",
        "lastName"=> "Hundey",
        "email"=> "mhundeyd@about.com",
        "gender"=> "Male",
        "ipAddress"=> "166.17.107.120"
      ], [
        "id"=> 15,
        "firstName"=> "Maddy",
        "lastName"=> "Durn",
        "email"=> "mdurne@aol.com",
        "gender"=> "Male",
        "ipAddress"=> "137.203.20.105"
      ], [
        "id"=> 16,
        "firstName"=> "Erma",
        "lastName"=> "Matysik",
        "email"=> "ematysikf@google.cn",
        "gender"=> "Female",
        "ipAddress"=> "148.236.76.228"
      ], [
        "id"=> 17,
        "firstName"=> "Fred",
        "lastName"=> "Cheale",
        "email"=> "fchealeg@howstuffworks.com",
        "gender"=> "Male",
        "ipAddress"=> "187.224.26.195"
      ], [
        "id"=> 18,
        "firstName"=> "Wilek",
        "lastName"=> "Yitzovicz",
        "email"=> "wyitzoviczh@discovery.com",
        "gender"=> "Male",
        "ipAddress"=> "175.91.149.141"
      ], [
        "id"=> 19,
        "firstName"=> "Gabe",
        "lastName"=> "Willson",
        "email"=> "gwillsoni@arizona.edu",
        "gender"=> "Male",
        "ipAddress"=> "98.204.40.15"
      ], [
        "id"=> 20,
        "firstName"=> "Onfroi",
        "lastName"=> "Caught",
        "email"=> "ocaughtj@uiuc.edu",
        "gender"=> "Bigender",
        "ipAddress"=> "208.131.194.245"
      ]
      ];
   
    if (isset($_GET['id'])) {
      foreach ($arr as $item) {
          if ($item['id'] == $_GET['id']) {
              echo json_encode($item);
              die();
          }
      }
  } else if (isset($_GET['limit'])) {
      echo json_encode(array_slice($arr, 0, $_GET['limit']));
  } else {
      echo json_encode($arr);
  }

      
?>