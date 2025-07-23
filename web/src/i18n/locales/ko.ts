const ko = {
  translation: {
    head: {
      desktop: '원격 데스크톱',
      login: '로그인',
      changePassword: '비밀번호 변경',
      terminal: '터미널',
      wifi: 'Wi-Fi'
    },
    auth: {
      login: '로그인',
      placeholderUsername: '사용자명',
      placeholderPassword: '비밀번호',
      placeholderPassword2: '비밀번호 확인',
      noEmptyUsername: '사용자명을 입력하세요.',
      noEmptyPassword: '비밀번호를 입력하세요.',
      noAccount: '사용자 정보를 불러오지 못했습니다. 페이지를 새로고침하거나 비밀번호를 초기화하세요.',
      invalidUser: '잘못된 사용자명 또는 비밀번호',
      error: '알 수 없는 오류',
      changePassword: '비밀번호 변경', 
      changePasswordDesc: '장치의 보안을 위해 비밀번호를 변경하세요!',
      differentPassword: '비밀번호가 일치하지 않습니다.',
      illegalUsername: '사용자명에 사용할 수 없는 문자가 있습니다.',
      illegalPassword: '비밀번호에 사용할 수 없는 문자가 있습니다.',
      forgetPassword: '비밀번호를 잊어버렸나요?',
      ok: '확인',
      cancel: '닫기',
      loginButtonText: '로그인',
      tips: {
        reset1:
          '비밀번호를 초기화하려면 NanoKVM의 BOOT 버튼을 10초 동안 누르세요.',
        reset2: '자세한 내용은 다음 문서를 참조하세요.',
        reset3: '웹 기본 사용자명/비밀번호:',
        reset4: 'SSH 기본 사용자명/비밀번호:',
        change1: '이 작업을 수행하면 다음에 해당하는 비밀번호가 변경됩니다:',
        change2: '웹 로그인 비밀번호',
        change3: '시스템 root 비밀번호 (SSH 로그인 비밀번호)',
        change4: '비밀번호를 초기화하려면 NanoKVM의 BOOT 버튼을 10초 동안 누르세요.'
      }
    },
    wifi: {
      title: 'Wi-Fi',
      description: 'Configure Wi-Fi for NanoKVM',
      success: 'Please check the network status of NanoKVM and visit the new IP address.',
      failed: 'Operation failed, please try again.',
      confirmBtn: 'Ok',
      finishBtn: 'Finished'
    },
    screen: {
      title: '화면',
      video: '비디오 모드',
      videoDirectTips: '이 모드를 사용하려면 "설정 > 장치"에서 HTTPS를 활성화하세요.',
      resolution: '해상도',
      auto: '자동',
      autoTips:
        "Screen tearing or mouse offset may occur at specific resolutions. Consider adjusting the remote host's resolution or disable automatic mode.",
      fps: 'FPS',
      customizeFps: 'Customize',
      quality: '품질',
      qualityLossless: '무손실',
      qualityHigh: '높음',
      qualityMedium: '중간',
      qualityLow: '낮음',
      frameDetect: 'Frame Detect',
      frameDetectTip:
        "Calculate the difference between frames. Stop transmitting video stream when no changes are detected on the remote host's screen.",
      resetHdmi: 'HDMI 초기화'
    },
    keyboard: {
      title: '키보드',
      paste: '붙여넣기',
      tips: 'Only standard keyboard letters and symbols are supported',
      placeholder: 'Please input',
      submit: '확인',
      virtual: '키보드',
      ctrlaltdel: 'Ctrl+Alt+Del'
    },
    mouse: {
      title: '마우스',
      cursor: 'Cursor style',
      default: 'Default cursor',
      pointer: 'Pointer cursor',
      cell: 'Cell cursor',
      text: 'Text cursor',
      grab: 'Grab cursor',
      hide: 'Hide cursor',
      mode: 'Mouse mode',
      absolute: 'Absolute mode',
      relative: 'Relative mode',
      speed: 'Wheel speed',
      fast: 'Fast',
      slow: 'Slow',
      requestPointer: 'Using relative mode. Please click desktop to get mouse pointer.',
      resetHid: 'Reset HID',
      hidOnly: {
        title: 'HID-Only mode',
        desc: "If your mouse and keyboard stop responding and resetting HID doesn't help, it could be a compatibility issue between the NanoKVM and the device. Try to enable HID-Only mode for better compatibility.",
        tip1: 'Enabling HID-Only mode will unmount the virtual U-disk and virtual network',
        tip2: 'In HID-Only mode, image mounting is disabled',
        tip3: 'NanoKVM will automatically reboot after switching modes',
        enable: 'Enable HID-Only mode',
        disable: 'Disable HID-Only mode'
      }
    },
    image: {
      title: '이미지',
      loading: '로드 중...',
      empty: '항목 없음',
      cdrom: 'Mount the image in CD-ROM mode',
      mountFailed: 'Mount Failed',
      mountDesc:
        "In some systems, it's necessary to eject the virtual disk on the remote host before mounting the image.",
      refresh: 'Refresh the image list',
      tips: {
        title: 'How to upload',
        usb1: 'Connect the NanoKVM to your computer via USB.',
        usb2: 'Ensure that the virtual disk is mounted (Settings - Virtual Disk).',
        usb3: 'Open the virtual disk on your computer and copy the image file to the root directory of the virtual disk.',
        scp1: 'Make sure the NanoKVM and your computer are on the same local network.',
        scp2: 'Open a terminal on your computer and use the SCP command to upload the image file to the /data directory on the NanoKVM.',
        scp3: 'Example: scp your-image-path root@your-nanokvm-ip:/data',
        tfCard: 'TF Card',
        tf1: 'This method is supported on Linux system',
        tf2: 'Get TF card from the NanoKVM (for the FULL version, disassemble the case first).',
        tf3: 'Insert the TF card into a card reader and connect it to your computer.',
        tf4: 'Copy the image file to the /data directory on the TF card.',
        tf5: 'Insert the TF card into the NanoKVM.'
      }
    },
    script: {
      title: '스크립트',
      upload: '업로드',
      run: '실행',
      runBackground: 'Run Background',
      runFailed: 'Run failed',
      attention: 'Attention',
      delDesc: 'Are you sure you want to delete this file?',
      confirm: 'Yes',
      cancel: 'No',
      delete: 'Delete',
      close: 'Close'
    },
    terminal: {
      title: 'Terminal',
      nanokvm: 'NanoKVM Terminal',
      serial: 'Serial Port Terminal',
      serialPort: 'Serial Port',
      serialPortPlaceholder: 'Please enter the serial port',
      baudrate: 'Baud rate',
      parity: 'Parity',
      parityNone: 'None',
      parityEven: 'Even',
      parityOdd: 'Odd',
      flowControl: 'Flow control',
      flowControlNone: 'None',
      flowControlSoft: 'Soft',
      flowControlHard: 'Hard',
      dataBits: 'Data bits',
      stopBits: 'Stop bits',
      confirm: 'Ok'
    },
    wol: {
      title: 'Wake-on-LAN',
      sending: 'Sending command...',
      sent: 'Command sent',
      input: 'Please enter the MAC',
      ok: 'Ok'
    },
    download: {
      title: 'Image Downloader',
      input: 'Please enter a remote image URL',
      ok: 'Ok',
      disabled: '/data partition is RO, so we cannot download the image'
    },
    power: {
      title: '전원',
      showConfirm: '실행 전 확인',
      showConfirmTip: 'Power operations require an extra confirmation',
      reset: '리셋',
      power: '전원',
      powerShort: '전원 (짧게 누르기)',
      powerLong: '전원 (길게 누르기)',
      resetConfirm: '리셋 작업을 수행하시겠습니까?',
      powerConfirm: '전원 작업을 수행하시겠습니까?',
      okBtn: '예',
      cancelBtn: '아니오'
    },
    settings: {
      title: '설정',
      about: {
        title: '정보',
        information: '정보',
        ip: 'IP',
        mdns: 'mDNS',
        application: '펌웨어 버전',
        applicationTip: 'NanoKVM 웹 애플리케이션 버전',
        image: '이미지 버전',
        imageTip: 'NanoKVM 시스템 이미지 버전',
        deviceKey: 'Device Key',
        community: '커뮤니티',
        hostname: '호스트명',
        hostnameUpdated: '새 호스트명을 적용하려면 재부팅하세요.',
        ipType: {
          Wired: '유선',
          Wireless: '무선',
          Other: '기타'
        }
      },
      appearance: {
        title: '모양',
        display: '모양',
        language: '언어',
        menuBar: '메뉴 바',
        menuBarDesc: 'Display icons in the menu bar',
        webTitle: '페이지 제목',
        webTitleDesc: 'Customize the web page title'
      },
      device: {
        title: '장치',
        oled: {
          title: 'OLED',
          description: 'Turn off OLED screen after',
          0: '안 함',
          15: '15초',
          30: '30초',
          60: '1분',
          180: '3분',
          300: '5분',
          600: '10분',
          1800: '30분',
          3600: '1시간'
        },
        wifi: {
          title: 'Wi-Fi',
          description: 'Configure Wi-Fi',
          setBtn: 'Config'
        },
        ssh: {
          description: 'Enable SSH remote access',
          tip: 'Set a strong password before enabling (Account - Change Password)'
        },
        tls: {
          description: 'Enable HTTPS protocol',
          tip: 'Be aware: Using HTTPS can increase latency, especially with MJPEG video mode.'
        },
        advanced: 'Advanced Settings',
        swap: {
          title: '스왑 메모리',
          disable: '비활성화',
          description: '스왑 파일 크기 설정',
          tip: "Enabling this feature could shorten your SD card's usable life!"
        },
        mouseJiggler: {
          title: 'Mouse Jiggler',
          description: 'Prevent the remote host from sleeping',
          disable: 'Disable',
          absolute: 'Absolute Mode',
          relative: 'Relative Mode'
        },
        mdns: {
          description: 'Enable mDNS discovery service',
          tip: "Turning it off if it's not needed"
        },
        hdmi: {
          description: 'Enable HDMI/monitor output'
        },
        hidOnly: 'HID-Only Mode',
        disk: 'Virtual Disk',
        diskDesc: 'Mount virtual U-disk on the remote host',
        network: 'Virtual Network',
        networkDesc: 'Mount virtual network card on the remote host',
        reboot: 'Reboot',
        rebootDesc: 'Are you sure you want to reboot NanoKVM?',
        okBtn: 'Yes',
        cancelBtn: 'No'
      },
      tailscale: {
        title: 'Tailscale',
        memory: {
          title: '메모리 최적화',
          tip: "When memory usage exceeds the limit, garbage collection is performed more aggressively to attempt to free up memory. It's recommended to set to 75MB if using Tailscale. A Tailscale restart is required for the change to take effect.",
          disable: '비활성화'
        },
        restart: 'Restart Tailscale?',
        stop: 'Stop Tailscale?',
        stopDesc: 'Log out Tailscale and disable automatic startup on boot.',
        loading: 'Loading...',
        notInstall: 'Tailscale not found! Please install.',
        install: '설치',
        installing: 'Installing',
        failed: 'Install failed',
        retry: 'Please refresh and try again. Or try to install manually',
        download: 'Download the',
        package: 'installation package',
        unzip: 'and unzip it',
        upTailscale: 'Upload tailscale to NanoKVM directory /usr/bin/',
        upTailscaled: 'Upload tailscaled to NanoKVM directory /usr/sbin/',
        refresh: 'Refresh current page',
        notLogin:
          'The device has not been bound yet. Please login and bind this device to your account.',
        urlPeriod: 'This url is valid for 10 minutes',
        login: '로그인',
        loginSuccess: 'Login Success',
        enable: 'Tailscale 활성화',
        deviceName: '기기명',
        deviceIP: '기기 IP',
        account: '계정',
        logout: '로그아웃',
        logoutDesc: 'Are you sure you want to logout?',
        uninstall: 'Uninstall Tailscale',
        okBtn: '예',
        cancelBtn: '아니요'
      },
      update: {
        title: 'Check for Updates',
        queryFailed: 'Get version failed',
        updateFailed: 'Update failed. Please retry.',
        isLatest: 'You already have the latest version.',
        available: 'An update is available. Are you sure you want to update now?',
        updating: 'Update started. Please wait...',
        confirm: 'Confirm',
        cancel: 'Cancel',
        preview: 'Preview Updates',
        previewDesc: 'Get early access to new features and improvements',
        previewTip:
          'Please be aware that preview releases may contain bugs or incomplete functionality!'
      },
      account: {
        title: '계정',
        webAccount: 'Web Account Name',
        password: '비밀번호',
        updateBtn: 'Change',
        logoutBtn: 'Logout',
        logoutDesc: 'Are you sure you want to logout?',
        okBtn: 'Yes',
        cancelBtn: 'No'
      }
    },
    error: {
      title: "We've ran into an issue",
      refresh: 'Refresh'
    },
    fullscreen: {
      toggle: 'Toggle Fullscreen'
    },
    menu: {
      collapse: 'Collapse Menu',
      expand: 'Expand Menu'
    }
  }
};

export default ko;
