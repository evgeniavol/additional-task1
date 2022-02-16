  {
      const init = () => {
          let input = document.createElement("input");
          document.body.append(input);
          let p = document.createElement("p");
          document.body.append(p);
          let timeout;

          const copyInputText = () => {
              let text = input.value;
              if (timeout) {
                  clearTimeout(timeout);
              }
              timeout = setTimeout(() => {
                  p.innerHTML = text;
              }, 300);
          }

          input.addEventListener("input", copyInputText);
      };

      window.textInput = init;
  }