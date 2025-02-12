// Bu tapşırıqda sizə artıq verilmiş HTML və CSS şablonuna 
// yalnız JavaScript ilə fetch funksionallığını əlavə etmək qalıb. 
// JavaScript-dən istifadə edərək, "https://randomuser.me/api/" ünvanından random istifadəçi məlumatlarını alıb, 
// həmin məlumatları HTML-dəki təyin olunmuş elementlərə (şəkil, ad, email, telefon və s.) yerləşdirəcəksiniz. 
// İstifadəçi "Yeni İstifadəçi" düyməsinə basdıqda isə, mövcud məlumatlar yenilənərək 
// yeni random istifadəçi məlumatları göstəriləcək.

// Bu təlimatı izləyərək bu tapşırığı daha rahat edə bilərsiniz:

// Random istifadəçi məlumatlarını əldə edən funksiya yaradın.
// Səhifə yüklənərkən ilkin random istifadəçi məlumatlarının alınması üçün bu funksiyanı birbaşa çağırın.
// "Yeni İstifadəçi" düyməsinə kliklədikdə həmin funksiyanı yenidən çağırın.




async function fetchUser() {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];

      // Məlumatların DOM elementlərinə ötürülməsi
      document.getElementById('user-image').src = user.picture.large;
      document.getElementById('user-name').textContent = `${user.name.first} ${user.name.last}`;
      document.getElementById('user-email').textContent = user.email;
      document.getElementById('user-phone').textContent = user.phone;
    } catch (error) {
      console.error('Xəta baş verdi:', error);
    }
  }

  // Səhifə yükləndikdə ilkin istifadəçi məlumatını yükləmək
  fetchUser();

  // "Yeni İstifadəçi" düyməsinə klikləndikdə yeni məlumatların alınması
  document.getElementById('new-user-btn').addEventListener('click', fetchUser);