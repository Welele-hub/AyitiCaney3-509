"""
URL Configuration for AyitiCaney
"""
from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # ============================================
    # HOME & GENERAL PAGES
    # ============================================
    path('', views.home_view, name='home'),
    path('about/', views.about_view, name='about'),
    path('contact/', views.contact_view, name='contact'),
    
    # ============================================
    # AUTHENTICATION
    # ============================================
    path('register/', views.register_view, name='register'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    
    # Password Reset URLs (using Django's built-in views)
    path('password-reset/', 
         auth_views.PasswordResetView.as_view(
             template_name='rental/password_reset.html',
             email_template_name='rental/password_reset_email.html',
             subject_template_name='rental/password_reset_subject.txt'
         ), 
         name='password_reset'),
    
    path('password-reset/done/', 
         auth_views.PasswordResetDoneView.as_view(
             template_name='rental/password_reset_done.html'
         ), 
         name='password_reset_done'),
    
    path('password-reset-confirm/<uidb64>/<token>/', 
         auth_views.PasswordResetConfirmView.as_view(
             template_name='rental/password_reset_confirm.html'
         ), 
         name='password_reset_confirm'),
    
    path('password-reset-complete/', 
         auth_views.PasswordResetCompleteView.as_view(
             template_name='rental/password_reset_complete.html'
         ), 
         name='password_reset_complete'),
    
    # ============================================
    # PROPERTY BROWSING & SEARCH
    # ============================================
    path('properties/', views.search_properties_view, name='search_properties'),
    path('property/<int:property_id>/', views.property_detail_view, name='property_detail'),
    
    # ============================================
    # OWNER DASHBOARD & PROPERTY MANAGEMENT
    # ============================================
    path('owner/dashboard/', views.owner_dashboard_view, name='owner_dashboard'),
    path('owner/property/create/', views.create_property_view, name='create_property'),
    path('owner/property/<int:property_id>/edit/', views.edit_property_view, name='edit_property'),
    path('owner/property/<int:property_id>/delete/', views.delete_property_view, name='delete_property'),
    
    # ============================================
    # USER DASHBOARD & WISHLIST
    # ============================================
    path('user/dashboard/', views.user_dashboard_view, name='user_dashboard'),
    path('property/<int:property_id>/toggle-wishlist/', views.toggle_wishlist_view, name='toggle_wishlist'),
    
    # ============================================
    # MESSAGING SYSTEM
    # ============================================
    path('conversations/', views.conversations_view, name='conversations'),
    path('conversation/<int:conversation_id>/', views.conversation_detail_view, name='conversation_detail'),
    path('property/<int:property_id>/contact/', views.start_conversation_view, name='start_conversation'),
    
    # ============================================
    # REPORTING
    # ============================================
    path('property/<int:property_id>/report/', views.report_property_view, name='report_property'),
    
    # ============================================
    # USER PROFILE
    # ============================================
    path('profile/', views.profile_view, name='profile'),
    
    # ============================================
    # AJAX ENDPOINTS
    # ============================================
    path('ajax/get-cities/', views.get_cities_ajax, name='get_cities_ajax'),
]
