import '../styles/image_viewer.css'; // importujemy sciezke do pliku css w javascripcie
import big from '../assets/big.jpeg';
import small from '../assets/small.jpeg'; //base 65string

const image = document.createElement('img');

//image.src = 'https://royalcanin.pl/blog/wp-content/uploads/2017/01/mleko-950x631.jpeg';
image.src = small;
document.body.appendChild(image);

const bigImage = document.createElement('img');

bigImage.src = big;
document.body.appendChild(bigImage);