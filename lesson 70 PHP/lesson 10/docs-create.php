<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
    <title>מסמך חדש</title>
</head>

<body>
    <form class="container" method="POST" action="./docs-create.php">
        <div class="card bg-dark">
            <h1>יצירת מסמך</h1>
            <div class="card-body">
                <div class="mb-3">
                    <label class="form-label">כותרת</label>
                    <input type="text" class="form-control" name="title" placeholder="הקלד כאן את הכותרת.." required>
                </div>
                <div class="mb-3">
                    <label class="form-label">תמונה</label>
                    <input type="file" class="form-control" name="image" required>
                </div>
                <div class="mb-3">
                    <label class="form-label">תיאור</label>
                    <textarea name="description" class="form-control" cols="30" rows="10" placeholder="הקלד כאן את התוכן.."></textarea>
                </div>
            </div>

            <button class="btn" type="submit">הוסף <i class="fa fa-save"></i></button>
        </div>
    </form>
</body>

</html>