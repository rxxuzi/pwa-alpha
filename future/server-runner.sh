# cd alpha directory
# shellcheck disable=SC2034
for i in $(seq 1 10); do
  ls -a
    if [ -d alpha ]; then
        # shellcheck disable=SC2164
        cd alpha
        break
    fi
    cd ..
done

echo "alpha directory exists"

if [ ! -d C:/Apache/Apache24/htdocs/alpha ]; then
    mkdir C:/Apache/Apache24/htdocs/alpha
fi

cp -r ./* C:/Apache/Apache24/htdocs/alpha/

# shellcheck disable=SC2164
cd C:/Apache/Apache24/htdocs/alpha/

echo "alpha copied"
echo "Run Apache Server ? "

yn="no"

while true; do
    read -p "y/n?" yn
    case $yn in
        [Yy]* ) yn="yes"; break;;
        [Nn]* ) yn="no"; break;;
        * ) echo "Please answer yes or no.";;
    esac
done

# then run the server
if [ $yn = "yes" ]; then
    echo "Apache Server Running"
    echo "Stop the server -> CTRL + C"
    # shellcheck disable=SC2164
    cd C:/Apache/Apache24/bin/
    ./httpd.exe
fi
