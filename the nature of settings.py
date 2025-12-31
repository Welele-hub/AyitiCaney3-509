# Add to INSTALLED_APPS
INSTALLED_APPS = [
    # ...
    'rental',
]

# Set custom user model
AUTH_USER_MODEL = 'rental.User'

# Configure database
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'ayiticaney_db',
        'USER': 'your_username',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# Media files
MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / 'media'
