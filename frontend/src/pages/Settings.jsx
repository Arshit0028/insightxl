import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>

      {/* Profile Settings */}
      <Card>
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-semibold">Profile</h2>
          <Input placeholder="Name" />
          <Input placeholder="Email" type="email" />
          <Input placeholder="Change Password" type="password" />
          <Button>Save Profile</Button>
        </CardContent>
      </Card>

      {/* Preferences */}
      <Card>
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-semibold">Preferences</h2>
          <div className="flex items-center justify-between">
            <label htmlFor="theme">Dark Mode</label>
            <Switch id="theme" />
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardContent className="space-y-4 p-4">
          <h2 className="text-xl font-semibold">Notifications</h2>
          <div className="flex items-center justify-between">
            <label htmlFor="email-alerts">Email Alerts</label>
            <Switch id="email-alerts" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;
