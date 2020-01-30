# GlassIt Linux

[GlassIt VSC](https://github.com/hikarin522/GlassIt-VSC) is a popular Windows-only transparency extension for VSCode. `GlassIt Linux` expands that functionality to include standard Linux window managers such as GNOME.

## Prerequisites

`GlassIt Linux` requires `wmctrl` (to get the window ID), `xprop` (to set transparency), and `bash` (to run the transparency commands) installed on your system. These come standard with most Linux distributions, but just in case, you can install them with:

``` bash
sudo apt install -y wmctrl x11-utils bash
```

## Usage
- Install the extension
- Restart any single VSCode window

## Settings

Opacity defaults to `97%`, but can be set with the setting `Glassit-linux: Opacity` in VSCode's settings window. A restart of any single window is required for this setting to take effect.

## Links
- Repo: https://github.com/Fmstrat/glassit-linux