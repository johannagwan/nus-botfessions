#!/usr/bin/env python
# coding: utf-8

from fastai.text import *
from fastai import *
import re

bs = 15

path = '/home/johanna/hnr2020'


data_lm = load_data(path, 'lm_databunch', bs=bs)

learn_lm = language_model_learner(data_lm, AWD_LSTM, drop_mult=1.5)

learn_lm.load('fine_tuned_4_2')


len(data_lm.vocab.itos), len(data_lm.train_ds)


# print(len(sys.argv))
TEXT = ""
for i in range(1, len(sys.argv)):
    TEXT = TEXT + " " + sys.argv[i] 
N_WORDS = 100
N_SENTENCES = 5


confession = learn_lm.predict(TEXT, N_WORDS, temperature=0.75)
t1 = " ".join(re.split(r'(?<=[.:;])\s', confession)[:N_SENTENCES])
print(TEXT + " " + t1)
