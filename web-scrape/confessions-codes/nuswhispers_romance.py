from selenium.webdriver import Chrome
import pandas as pd
import time

webdriver = "D:\Hanna programme downloads\chromedriver_win32\chromedriver.exe"

driver = Chrome(webdriver)

def scroll(driver, timeout):
    scroll_pause_time = timeout
    i = 0
    # Get scroll height
    last_height = driver.execute_script("return document.body.scrollHeight")

    while True:
        # Scroll down to bottom
        driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")

        # Wait to load page
        time.sleep(scroll_pause_time)

        # Calculate new scroll height and compare with last scroll height
        new_height = driver.execute_script("return document.body.scrollHeight")
        if i == 2500:
            break
        # last_height = new_height
        i += 1

url = "https://nuswhispers.com/category/7"

driver.get(url)
scroll(driver, 0.1)

total = []
categoriesArr = []

categories = driver.find_elements_by_class_name("post-header")
c = 0
for category in categories:
    cat = ((category.text))
    categoriesArr.append(cat)
    c += 1

contents = driver.find_elements_by_class_name("post-content")
d = 0
for content in contents:
    new = ((content.text[9:-16], categoriesArr[d]))
    d += 1
    total.append(new)
df = pd.DataFrame(total,columns=['confessions', 'categories'])
df.to_csv('confessionsRomance.csv')
driver.close()