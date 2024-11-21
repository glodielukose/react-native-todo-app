if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/home/glodielukose/.gradle/caches/8.10.2/transforms/3a7bebb529c985002ed3cd2a147eab88/transformed/jetified-hermes-android-0.76.2-debug/prefab/modules/libhermes/libs/android.armeabi-v7a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/home/glodielukose/.gradle/caches/8.10.2/transforms/3a7bebb529c985002ed3cd2a147eab88/transformed/jetified-hermes-android-0.76.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

