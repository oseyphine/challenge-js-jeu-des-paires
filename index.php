<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Memory Game</title>

  <link href="css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="css/custom.css">

</head>
<body>
  <header>
    <h1>Let's play Memory Game.</h1>
    <h2>w/Simplon_Réunion</h2>
  </header>

  <section>
    <div class="container">
      <div class="container-fluid">
      <?php
        $mesCartes = array(
        "<img src="images/logorond.png" class="carte" id="position1" />",
        "<img src="images/logorond.png" class="carte" id="position2" />",
        "<img src="images/logorond.png" class="carte" id="position3" />",
        "<img src="images/logorond.png" class="carte" id="position4" />",
        "<img src="images/logorond.png" class="carte" id="position5" />",
        "<img src="images/logorond.png" class="carte" id="position6" />",
        "<img src="images/logorond.png" class="carte" id="position7" />",
        "<img src="images/logorond.png" class="carte" id="position8" />",
        "<img src="images/logorond.png" class="carte" id="position9" />",
        "<img src="images/logorond.png" class="carte" id="position10" />",
        "<img src="images/logorond.png" class="carte" id="position11" />",
        "<img src="images/logorond.png" class="carte" id="position12" />",
        );
        shuffle($mesCartes);
        foreach ($mesCartes as $mesCartes) {
            echo $mesCartes;
        };
        
        unset($mesCartes);
      ?>
      </div>
    </div>

  </section>
<footer>
  <p>by OseyPhine© DW2.Simplon_Réunion (édition 2017)</p>
</footer>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script type="text/javascript" src="js/script.js"></script>
</body>
</html>