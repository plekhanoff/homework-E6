
from django.test import TestCase
from authapp.views import index
from authapp.forms import RegisterForm
from authapp.models import User


class IndexViewTest(TestCase):
    def test_index_view(self):
        response = self.client.get('/')
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'index.html')
        

class UserRegistrationTest(TestCase):
    def test_user_registration(self):
        form_data = {'username': 'testuser', 'email': 'test@example.com', 'password': 'password', 'password2': 'password'}
        form = RegisterForm(form_data)
        self.assertTrue(form.is_valid())
        form.save()
        self.assertTrue(User.objects.filter(username='testuser').exists())
       
