<?
    $colors = [
        "red",
        "green",
        "blue",
    ];

    $colors = array(
        "red",
        "green",
        "blue",
    );

    $colors[] = "purple";

    array_push($colors, "yellow");
    array_unshift($colors,"pink");

    $person = [
        "id" => 1,
        "firstName" => "dani",
        "lastName" => "sho",
        "phone" => "050-5005050",
        "grades" => [100, 90, 80, 70],
        "isActive" => true,
    ];

    $person['age'] = 23;

    echo var_dump($person);
    echo var_dump($colors);

    $name = "kim";
    echo"hello"." hello"." $name";

    echo" your age is {$person['age']}";

   echo var_dump($_SERVER['REMOTE_ADDR']);
?>