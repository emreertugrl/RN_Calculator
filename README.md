🔁 1. React.memo Nedir?
📌 Tanım:
React.memo, bir Higher-Order Component'tir. Yani bir bileşeni saran özel bir fonksiyondur.

🧠 Amaç:
Eğer bir bileşen aynı props ile tekrar tekrar çağrılıyorsa, yeniden render edilmesin diye kullanılır.

🔧 Kullanımı:
const MyComponent = ({title}) => {
console.log('Render edildi');
return <Text>{title}</Text>;
};

export default React.memo(MyComponent);
🔍 Nasıl Çalışır?
Eğer props'larda hiçbir değişiklik yoksa, React.memo bileşeni önceki render'ı kullanır (memoize eder).

Ama props'lardan biri bile farklıysa (referans ya da değer farkı) bileşen yeniden render edilir.

💡 2. Neden React.memo Bazen İşe Yaramaz?
<CustomButton handle={() => setA(a + 1)} />
Burada handle prop'u her seferinde yeni bir fonksiyondur. React bunu şöyle görür:

js
Kopyala
Düzenle
prevProps.handle !== nextProps.handle // true → yeniden render
İşte burada useCallback devreye girer.

📌 3. useCallback Nedir?
📌 Tanım:
useCallback, bir fonksiyonu sabit tutmak (memoize etmek) için kullanılır. Fonksiyon her render’da yeniden oluşturulmaz, referansı sabit kalır.

🔧 Kullanımı:
const handleClick = useCallback(() => {
setA(prev => prev + 1);
}, []);
🧠 Neden Önemli?
React.memo bileşene props geçerken eğer fonksiyon gönderiyorsan, bu fonksiyonun referansı değişmemeli. useCallback, bunu sağlar.

🧮 4. useMemo Nedir?
📌 Tanım:
useMemo, bir değeri hesaplayıp bellekte saklar. İlgili bağımlılıklar değişmediği sürece bu değeri tekrar hesaplamaz.

🔧 Kullanımı:
const expensiveResult = useMemo(() => {
return slowFunction(input);
}, [input]);
Ne İçin Kullanılır?
Ağır hesaplamaları sadece gerekli olduğunda tekrar yapmak için

Derin object, array referanslarını sabit tutmak için

🔄 5. Neden Bazı Bileşenler Gereksiz Render Olur?
React bileşenleri her state veya prop değişiminde kendisi ve altındaki tüm bileşenleri yeniden render eder. Bu, bazen gereksizdir.

Örnek:

<Count count={a} title="A" />
<Count count={b} title="B" />
Sen sadece setA yaptığında, b'nin bileşeninde değişiklik yok. Ama parent (Memorization) yeniden render olduğu için, içindeki Count bileşenleri de yeniden çağrılır. Eğer Count bileşeni memo ile sarılıysa ve count & title aynıysa, render olmaz.

👨‍🏫 Özet Tablo
Kavram Ne Yapar? Ne Zaman Kullanılır?
React.memo Bileşeni memoize eder Props değişmiyorsa yeniden render olmasın diye
useCallback Fonksiyonları memoize eder Props olarak fonksiyon gönderiyorsan
useMemo Değerleri hesaplayıp saklar Ağır hesaplamaları optimize etmek için
Yeniden Render React tüm parent ve children'ı render eder memo, useCallback ile optimize edilir

🎁 Bonus: Pratik Örnek
const MyComponent = () => {
const [a, setA] = useState(0);
const [b, setB] = useState(0);

const handleA = useCallback(() => setA(prev => prev + 1), []);
const handleB = useCallback(() => setB(prev => prev + 1), []);

return (
<>
<Count title="A" count={a} />
<Count title="B" count={b} />
<CustomButton title="A Arttır" handle={handleA} backgroundColor="green" />
<CustomButton title="B Arttır" handle={handleB} backgroundColor="red" />
</>
);
};
Böylece:

CustomButton her render’da tekrar render edilmez.

Count bileşenleri yalnızca ilgili sayı değişince render olur.
