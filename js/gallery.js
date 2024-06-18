const prevBtn = document.querySelector('.backBtn');
const nextvBtn = document.querySelector('.nextvBtn');
const imageContainer = document.querySelector('.image-container');
const imageDescription = document.querySelector('.image-description');

const images = [
    { src: 'images/galleryImg/img6.gif', description: '전 프로젝트 로딩 gif' },
    { src: 'images/galleryImg/img3.png', description: '전 프로젝트 타이틀 김여주 (초기)' },
    { src: 'images/galleryImg/img4.png', description: '전 프로젝트 타이틀 김여주 (확정)' },
    { src: 'images/galleryImg/img11.png', description: '전 프로젝트 메인화면' },
    { src: 'images/galleryImg/img8.png', description: '전 프로젝트 로고' },
    { src: 'images/galleryImg/img7.png', description: '장미고 로고' },
    { src: 'images/galleryImg/img17.png', description: '전 프로젝트 ver.1 초상화' },
    { src: 'images/galleryImg/img18.png', description: '(드랍)프로필 패널 디자인' },
    { src: 'images/galleryImg/img2.png', description: '민들레 초기 디자인 시안' },
    { src: 'images/galleryImg/img1.png', description: '솔로 엔딩 초기 시안' },
    { src: 'images/galleryImg/img5.png', description: '? 엔딩 초기 시안' },
    { src: 'images/galleryImg/img9.png', description: '? 엔딩 초기 시안' },
    { src: 'images/galleryImg/img10.png', description: '? 엔딩 초기 시안' },
    { src: 'images/galleryImg/img16.png', description: '? 엔딩 초기 시안' },
    { src: 'images/galleryImg/img12.png', description: '홍보용 제작 이미지' },
    { src: 'images/galleryImg/img13.png', description: '지연 메세지 프로필' },
    { src: 'images/galleryImg/img14.png', description: '(드랍)오프닝 전 사용 예정이었던1' },
    { src: 'images/galleryImg/img15.png', description: '(드랍)오프닝 전 사용 예정이었던2' }
];

let currentImageIndex = 0;

function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
}

function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
}

function updateImage() {
    const imageURL = images[currentImageIndex].src;
    const imageDescriptionText = images[currentImageIndex].description;

    const imageElement = document.createElement('img');
    imageElement.src = imageURL;
    imageElement.alt = 'Image';

    imageContainer.innerHTML = '';
    imageContainer.appendChild(imageElement);

    imageDescription.textContent = imageDescriptionText;
}

prevBtn.addEventListener('click', showPreviousImage);
nextvBtn.addEventListener('click', showNextImage);

updateImage();
