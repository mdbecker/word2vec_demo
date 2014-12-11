# Setup
1. Download GoogleNews-vectors-negative300.bin.gz from [https://code.google.com/p/word2vec/](https://code.google.com/p/word2vec/#Pre-trained_word_and_phrase_vectors)
2. ``conda create -n word2vec_demo python=2.7 ipython-notebook matplotlib pandas pip seaborn gensim; source ~/anaconda/bin/activate word2vec_demo; pip install flask-restful``
3. ``python word2vec_convert.py`` (takes 3+ minutes on my MackBook).
4. ``python word2vec_api.py`` (takes 30 seconds on my MacBook).
5. ``open -a Google\ Chrome --args --disable-web-security index.html`` (You might need to close Chrome if it's already open).
